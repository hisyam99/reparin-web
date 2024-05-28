import { Pathnames } from "next-intl/navigation";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = "id" as const;
export const locales = ["id", "en"] as const;

export const pathnames = {
  "/": "/",
    '/services': {         //Masih ngebug :/
      en: '/services',
      id: '/layanan'
    }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
