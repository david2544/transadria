"use client";
// app/page.tsx

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <Image
          src="/hero-home-page.webp"
          alt="Transadria trucks on the road"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="relative container mx-auto px-4 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t("heroTitle")}
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-6">{t("heroSubtitle")}</h2>
          <p className="text-lg mb-8 max-w-2xl">{t("heroDescription")}</p>
          <Link
            href="/contact"
            className="bg-[#4a55cf] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#3a45bf] transition-colors"
          >
            {t("heroButton")}
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-[#4a55cf]">
                {t("aboutTitle")}
              </h2>
              <p className="text-lg">{t("aboutDescription")}</p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <Image
                src="/truck-light.webp"
                width={720}
                height={959}
                alt="Transadria company logo"
                className="dark:hidden"
              />
              <Image
                src="/truck-dark.webp"
                width={720}
                height={959}
                alt="Transadria company logo"
                className="hidden dark:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#4a55cf]">
            {t("servicesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">
                {t("service1Title")}
              </h3>
              <p>{t("service1Desc")}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">
                {t("service2Title")}
              </h3>
              <p>{t("service2Desc")}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">
                {t("service3Title")}
              </h3>
              <p>{t("service3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#4a55cf]">
            {t("whyTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white-100 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {t("reason1Title")}
              </h3>
              <p>{t("reason1Desc")}</p>
            </div>
            <div className="bg-white-100 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {t("reason2Title")}
              </h3>
              <p>{t("reason2Desc")}</p>
            </div>
            <div className="bg-white-100 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {t("reason3Title")}
              </h3>
              <p>{t("reason3Desc")}</p>
            </div>
            <div className="bg-white-100 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {t("reason4Title")}
              </h3>
              <p>{t("reason4Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#4a55cf] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
          <p className="text-xl mb-8">{t("ctaSubtitle")}</p>
          <Link
            href="/contact"
            className="bg-white text-[#4a55cf] px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
