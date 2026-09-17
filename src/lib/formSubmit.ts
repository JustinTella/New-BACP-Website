type SubmissionPayload = Record<string, string>;

type SubmissionResult = {
  success?: boolean;
  message?: string;
};

/**
 * Each inquiry goes to its own Web3Forms endpoint so the team can route and
 * filter by the conversation the physician actually started.
 *
 * These access keys are public by design: Web3Forms submits straight from the
 * browser, so whatever we use ships inside the JavaScript bundle and is
 * readable by anyone. Restrict them to the site's domain in the Web3Forms
 * dashboard — that, not secrecy, is what stops the forms being abused. The env
 * vars exist so a deploy can point the site at a different inbox.
 */
export type FormId = 'selling' | 'joining' | 'careers' | 'general';

const accessKeys: Record<FormId, string> = {
  // Succession planning / practice owners
  selling:
    import.meta.env.VITE_WEB3FORMS_KEY_SELLING || '648f2dba-671f-44d8-ac39-d82cae2d564c',
  // Physicians looking to join a practice
  joining:
    import.meta.env.VITE_WEB3FORMS_KEY_JOINING || '1fdd4a75-62fd-42de-8c4c-780a51d5488e',
  // Careers has no inbox of its own yet: applications run through Ashby, and
  // the "no role fits" note lands with the joining inquiries, labelled
  // "Career interest" in the subject line. Give it a key here to split it out.
  careers:
    import.meta.env.VITE_WEB3FORMS_KEY_CAREERS || '1fdd4a75-62fd-42de-8c4c-780a51d5488e',
  // Legacy pages that are no longer routed.
  general:
    import.meta.env.VITE_WEB3FORMS_KEY_SELLING || '648f2dba-671f-44d8-ac39-d82cae2d564c',
};

const SITE_NAME = 'Blue Angel Clinical Partners';

export async function submitWebsiteForm(
  payload: SubmissionPayload,
  form: FormId = 'general',
) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKeys[form],
      ...payload,
      from_name: SITE_NAME,
      submitted_from: SITE_NAME,
    }),
  });

  const result = (await response.json().catch(() => null)) as SubmissionResult | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || 'Unable to send the inquiry.');
  }

  return result;
}
