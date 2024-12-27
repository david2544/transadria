"use client";

import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footerContactTitle")}
            </h3>
            <p>{t("footerAddress")}</p>
            <p>{t("footerAddress2")}</p>
            <p>{t("footerEmail")}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Transadria. {t("footerText")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
