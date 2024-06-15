import { resend } from "@/lib/resend";
import MagicLinkEmail from "@/emails/MagicLinkEmail";

interface VerificationRequestParams {
  identifier: string;
  url: string;
  provider: string;
  theme: string;
}

export async function sendVerificationRequest(params: VerificationRequestParams) {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);

  try {
    const data = await resend.emails.send({
      from: "YOUR_VERIFIED_DOMAIN",
      to: [identifier],
      subject: `Log in to ${host}`,
      text: text({ url, host }),
      react: MagicLinkEmail({ url, host }),
    });
    return { success: true, data };
  } catch (error) {
    throw new Error("Failed to send the verification Email.");
  }
}

function text({ url, host }: { url: string; host: string }): string {
  return `Sign in to ${host}\n${url}\n\n`;
}
