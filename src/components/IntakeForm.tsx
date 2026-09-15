import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { site } from '@/content/blueangel';

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
 * A static-hosting-safe intake form. GitHub Pages has no server-side form
 * handler, so submission opens a fully populated email for the visitor to
 * review before they choose to send it. The careers form can switch to Ashby
 * by setting VITE_ASHBY_APPLICATION_URL in the deploy environment.
 */
function IntakeForm({ kind }: IntakeFormProps) {
  const content = details[kind];
  const ashbyUrl = import.meta.env.VITE_ASHBY_APPLICATION_URL;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    context: '',
    timing: '',
    message: '',
  });

  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `${content.contextLabel}: ${form.context}`,
      `${content.timingLabel}: ${form.timing || 'Not provided'}`,
      '',
      `${content.messageLabel}`,
      form.message,
    ].join('\n');

    setSubmitted(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${site.name} — ${content.subject}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  if (kind === 'careers' && ashbyUrl) {
    return (
      <div className="border border-navy/10 bg-white p-8 shadow-[0_20px_60px_rgba(6,56,98,0.08)] sm:p-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
          {content.label}
        </span>
        <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-navy sm:text-4xl">
          See open roles in Ashby.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
          Review current openings and submit an application through our careers portal.
        </p>
        <a
          href={ashbyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-steely-blue"
        >
          View open positions <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    );
  }

  return (
    <div className="border border-navy/10 bg-white p-6 shadow-[0_20px_60px_rgba(6,56,98,0.08)] sm:p-8 lg:p-10">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
        {content.label}
      </span>
      <h2 className="mt-5 font-serif text-2xl leading-tight tracking-tight text-navy sm:text-3xl">
        {content.title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-foreground/75">{content.intro}</p>

      {submitted && (
        <div className="mt-7 flex gap-3 border-l-2 border-gold bg-light-gray p-5 text-foreground/80">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-navy" aria-hidden />
          <p className="text-base leading-relaxed">
            Your email app should now be open with this inquiry prepared. Please review and
            send it when you are ready.
          </p>
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" value={form.name} onChange={update} required />
          <Field label="Email address" name="email" type="email" value={form.email} onChange={update} required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone number" name="phone" type="tel" value={form.phone} onChange={update} />
          <Field
            label={content.contextLabel}
            name="context"
            value={form.context}
            onChange={update}
            placeholder={content.contextPlaceholder}
            required
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
          className="inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-steely-blue"
        >
          Prepare inquiry email <ArrowUpRight className="h-4 w-4" aria-hidden />
        </button>
        <p className="text-sm leading-relaxed text-foreground/60">
          This opens a pre-addressed email for you to review before sending. We do not submit
          your information automatically.
        </p>
      </form>
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
