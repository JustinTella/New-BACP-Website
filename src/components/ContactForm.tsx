import { useState } from "react";
import type { FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

/**
 * Web3Forms access key.
 * Get a free key at https://web3forms.com (it is safe to expose in the client),
 * then paste it below. Until then, submissions will return an error.
 */
const WEB3FORMS_ACCESS_KEY = "648f2dba-671f-44d8-ac39-d82cae2d564c";

type Status = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  /** Light form sits on cream/white; set variant="onNavy" for dark backgrounds. */
  variant?: "default" | "onNavy";
}

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New inquiry from BlueAngelClinical.com",
      from_name: `${fd.get("first_name")} ${fd.get("last_name")}`.trim(),
      first_name: fd.get("first_name"),
      last_name: fd.get("last_name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again, or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl bg-white p-10 text-center shadow-card ring-1 ring-navy/5">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-teal/10 text-teal">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="text-2xl text-navy">Thank you — message received.</h3>
        <p className="max-w-md text-muted">
          We've received your note and a member of our team will be in touch
          shortly. Every conversation is confidential.
        </p>
      </div>
    );
  }

  const labelCls =
    variant === "onNavy"
      ? "mb-1.5 block text-sm font-medium text-cream/90"
      : "mb-1.5 block text-sm font-medium text-navy";
  const fieldCls =
    "w-full rounded-xl border bg-white px-4 py-3 text-ink shadow-sm outline-none transition placeholder:text-muted/60 focus:border-azure focus:ring-2 focus:ring-azure/25 border-navy/15";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 text-left shadow-card ring-1 ring-navy/5 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first_name" className={labelCls}>
            First name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            autoComplete="given-name"
            className={fieldCls}
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="last_name" className={labelCls}>
            Last name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            autoComplete="family-name"
            className={fieldCls}
            placeholder="Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldCls}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldCls}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldCls} resize-y`}
          placeholder="Tell us a little about your practice or your goals…"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-gold/10 px-4 py-3 text-sm text-gold">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
