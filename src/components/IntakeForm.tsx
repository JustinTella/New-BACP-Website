import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, CircleAlert, LoaderCircle } from 'lucide-react';
import { submitWebsiteForm } from '@/lib/formSubmit';

type IntakeKind = 'selling' | 'joining' | 'careers';

type IntakeFormProps = {
  kind: IntakeKind;
};

const details = {
  selling: {
    label: 'Practice partnership inquiry',
    title: 'Tell us about your practice.',
    intro:
      'Start with the basics. We will follow up confidentially to learn what a partnership and transition could look like on your timeline.',
    contextLabel: 'Practice name and location',
    contextPlaceholder: 'Practice name, city, and state',
    timingLabel: 'What is your ideal timing?',
    timingPlaceholder: 'For example: exploring now, 1–3 years, or longer term',
    messageLabel: 'What would you like to talk through?',
    subject: 'Practice partnership inquiry',
  },
  joining: {
    label: 'Joining a practice inquiry',
    title: 'Tell us where you want to practice.',
    intro:
      'Share a little about your clinical background and the kind of concierge practice you hope to build. We will follow up with the right next conversation.',
    contextLabel: 'Specialty and preferred location',
    contextPlaceholder: 'For example: internal medicine, Bay Area',
    timingLabel: 'When would you like to make a move?',
    timingPlaceholder: 'For example: this year, after residency, or exploring',
    messageLabel: 'What are you looking for in your next practice?',
    subject: 'Joining a practice inquiry',
  },
  careers: {
    label: 'Open positions',
    title: 'Introduce yourself.',
    intro:
      'Tell us the kind of role you are interested in and the experience you would bring to Blue Angel or one of our partner practices.',
    contextLabel: 'Role or area of interest',
    contextPlaceholder: 'For example: physician, practice operations, or platform',
    timingLabel: 'When are you available?',
    timingPlaceholder: 'For example: immediately, summer 2026, or exploring',
    messageLabel: 'Tell us about your background or include a LinkedIn URL.',
    subject: 'Career interest',
  },
} as const;

/**
 * The forms send directly through Web3Forms, which provides serverless delivery
 * for the static GitHub Pages site. Each kind posts to its own inbox — see
 * src/lib/formSubmit.ts. Job applications run through Ashby instead, so the
 * careers form here is only for people who do not see a role that fits.
 */
function IntakeForm({ kind }: IntakeFormProps) {
  const content = details[kind];
  const [submissionState, setSubmissionState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    context: '',
    timing: '',
    message: '',
  });

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmissionState('idle');
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState('submitting');

    try {
      await submitWebsiteForm(
        {
          subject: content.subject,
          inquiry_type: content.subject,
          name: form.name,
          email: form.email,
          replyto: form.email,
          phone: form.phone || 'Not provided',
          [content.contextLabel]: form.context,
          [content.timingLabel]: form.timing || 'Not provided',
          [content.messageLabel]: form.message,
        },
        kind,
      );
      setSubmissionState('success');
      setShowConfirmation(true);
      setForm({ name: '', email: '', phone: '', context: '', timing: '', message: '' });
    } catch {
      setSubmissionState('error');
    }
  };

  return (
    <div className="border border-navy/10 bg-white p-6 shadow-[0_20px_60px_rgba(6,56,98,0.08)] sm:p-8 lg:p-10">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
        {content.label}
      </span>
      <h2 className="mt-5 font-serif text-2xl leading-tight tracking-tight text-navy sm:text-3xl">
        {content.title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-foreground/75">{content.intro}</p>

      {submissionState === 'error' && (
        <div className="mt-7 flex gap-3 border-l-2 border-gold bg-light-gray p-5 text-foreground/80">
          <CircleAlert className="mt-1 h-5 w-5 shrink-0 text-navy" aria-hidden />
          <p className="text-base leading-relaxed">
            We could not send your inquiry just now. Please try again in a moment.
          </p>
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" value={form.name} onChange={update} required />
          <Field label="Email address" name="email" type="email" value={form.email} onChange={update} required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone number" name="phone" type="tel" value={form.phone} onChange={update} required />
          <Field
            label={content.contextLabel}
            name="context"
            value={form.context}
            onChange={update}
            placeholder={content.contextPlaceholder}
          />
        </div>
        <Field
          label={content.timingLabel}
          name="timing"
          value={form.timing}
          onChange={update}
          placeholder={content.timingPlaceholder}
        />
        <label className="block text-base font-medium text-navy">
          {content.messageLabel} <span className="text-steely-blue">*</span>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            required
            rows={5}
            className="mt-2 block w-full border border-navy/20 bg-white px-4 py-3 text-base leading-relaxed text-foreground outline-none transition-colors placeholder:text-foreground/45 focus:border-navy"
          />
        </label>
        <button
          type="submit"
          disabled={submissionState === 'submitting'}
          className="inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-steely-blue disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submissionState === 'submitting' ? (
            <>
              Sending inquiry <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
            </>
          ) : (
            <>
              Send inquiry <ArrowUpRight className="h-4 w-4" aria-hidden />
            </>
          )}
        </button>
      </form>

      {showConfirmation && (
        <ConfirmationDialog
          closeButtonRef={closeButtonRef}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
}

/**
 * Confirms a successful send. Closes on Escape or on a click outside the panel,
 * and takes focus on open so keyboard users are not left behind the dialog.
 */
function ConfirmationDialog({
  onClose,
  closeButtonRef,
}: {
  onClose: () => void;
  closeButtonRef: React.RefObject<HTMLButtonElement>;
}) {
  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, closeButtonRef]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/40 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="intake-confirm-title"
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-md border-t-2 border-gold bg-white p-8 text-center shadow-[0_30px_80px_rgba(6,56,98,0.25)] sm:p-10"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-navy" aria-hidden />
        <h2
          id="intake-confirm-title"
          className="mt-5 font-serif text-2xl leading-tight tracking-tight text-navy sm:text-3xl"
        >
          Thank you.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/75">
          Your inquiry has been sent to the Blue Angel team. We will follow up with you
          soon.
        </p>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="mt-8 inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-steely-blue"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-base font-medium text-navy">
      {label} {required && <span className="text-steely-blue">*</span>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 block w-full border border-navy/20 bg-white px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-foreground/45 focus:border-navy"
      />
    </label>
  );
}

export default IntakeForm;
