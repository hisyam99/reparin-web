import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { locales } from "./config";

const privatePages = [
  "/services/(.*)",
  // add more private pages here
];

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "id",
});

const authMiddleware = withAuth(
  (req) => intlMiddleware(req),
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export default function middleware(req: NextRequest) {
  const privatePathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${privatePages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPrivatePage = privatePathnameRegex.test(req.nextUrl.pathname);

  if (isPrivatePage) {
    return (authMiddleware as any)(req);
  } else {
    return intlMiddleware(req);
  }
}

export const config = {
  matcher: ["/((?!api|apis|_next|_vercel|.*\\..*).*)"],
};
