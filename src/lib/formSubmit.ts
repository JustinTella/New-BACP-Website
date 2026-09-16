type SubmissionPayload = Record<string, string>;

type SubmissionResult = {
  success?: boolean;
  message?: string;
};

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '13983de2-1baf-4984-89f1-680d4a44f62b';

const SITE_NAME = 'Blue Angel Clinical Partners';

export async function submitWebsiteForm(payload: SubmissionPayload) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
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
