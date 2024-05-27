import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="footerStyle text-center p-4 mt-auto">
      <div className="container mx-auto py-8 text-justify">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">{t("aboutUs")}</h2>
            <ul>
              <li>
                <a href="/about" className="hover:underline">
                  {t("companyInfo")}
                </a>
              </li>
              <li>
                <a href="/team" className="hover:underline">
                  {t("team")}
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  {t("careers")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">{t("resources")}</h2>
            <ul>
              <li>
                <a href="/blog" className="hover:underline">
                  {t("blog")}
                </a>
              </li>
              <li>
                <a href="/help" className="hover:underline">
                  {t("helpCenter")}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  {t("contactUs")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">{t("legal")}</h2>
            <ul>
              <li>
                <a href="/terms" className="hover:underline">
                  {t("termsOfService")}
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  {t("privacyPolicy")}
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:underline">
                  {t("cookiePolicy")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">{t("followUs")}</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Image
                  src="/images/facebook-icon.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Image
                  src="/images/twitter-icon.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Image
                  src="/images/instagram-icon.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Image
                  src="/images/linkedin-icon.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-justify">{t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
