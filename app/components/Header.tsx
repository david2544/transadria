"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-[#4a55cf] dark:text-white"
          >
            <Image
              src="/logo-light.png"
              width={140}
              height={10}
              alt="Transadria company logo"
              className="h-10 dark:hidden"
            />
            <Image
              src="/logo-dark.png"
              width={140}
              height={10}
              alt="Transadria company logo"
              className="h-10 hidden dark:block"
            />
          </Link>

          {/* Mobile menu toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-[#4a55cf] dark:hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation */}
            <nav
              className={`lg:flex ${
                isMenuOpen ? "block" : "hidden"
              } absolute lg:relative top-16 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-white dark:bg-gray-800 lg:bg-transparent z-50`}
            >
              <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#4a55cf] dark:hover:text-white block lg:inline-block"
                  >
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#4a55cf] dark:hover:text-white block lg:inline-block"
                  >
                    {t("contact")}
                  </Link>
                </li>
                {/* Theme Toggle */}
                <li>
                  <button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="text-gray-600 dark:text-gray-300 hover:text-[#4a55cf] dark:hover:text-white block lg:inline-block"
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </li>
                {/* Language Switch */}
                <li>
                  <select
                    value={language}
                    onChange={(e) =>
                      setLanguage(e.target.value as typeof language)
                    }
                    className="bg-transparent text-gray-600 dark:text-gray-300 hover:text-[#4a55cf] dark:hover:text-white block lg:inline-block"
                  >
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="ro">RO</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
