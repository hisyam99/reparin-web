import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import ClientSessionProvider from "@/components/ClientSessionProvider";
import NextTopLoader from "nextjs-toploader";
import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";

const APP_NAME = "Reparin";
const APP_DEFAULT_TITLE = "Reparin";
const APP_TITLE_TEMPLATE = "%s - Reparin";
const APP_DESCRIPTION = "Cepat, Dekat, Terpercaya.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientSessionProvider>
            <GoogleCaptchaWrapper>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <NextTopLoader color="#ccfd86" showSpinner={false} />
                {children}
              </ThemeProvider>
            </GoogleCaptchaWrapper>
          </ClientSessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
