import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#my-journey" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

type HeaderProps = {
  toggleDarkMode: () => void;
};

export default function Header({ toggleDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const iconButtonClass = `
    rounded-md p-2 transition
    bg-purple-100 text-purple-600
    hover:bg-purple-200
    dark:bg-purple-900/30 dark:text-purple-300
    dark:hover:bg-purple-900/50
  `;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="text-lg font-bold text-purple-600">
              Navya&apos;s Portfolio
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`text-sm font-medium transition-colors
                      ${
                        isActive
                          ? "text-purple-600"
                          : "text-gray-700 dark:text-gray-300 hover:text-purple-600"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="/Navya_MK.pdf"
                  download
                  className="rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
                >
                  Resume
                </a>

                {/* Theme Toggle (Desktop) */}
                <button
                  onClick={toggleDarkMode}
                  className={iconButtonClass}
                  aria-label="Toggle theme"
                >
                  <MoonIcon className="h-5 w-5 dark:hidden" />
                  <SunIcon className="h-5 w-5 hidden dark:block" />
                </button>
              </div>

              {/* Theme Toggle (Mobile) */}
              <button
                onClick={toggleDarkMode}
                className={`md:hidden ${iconButtonClass}`}
                aria-label="Toggle theme"
              >
                <MoonIcon className="h-5 w-5 dark:hidden" />
                <SunIcon className="h-5 w-5 hidden dark:block" />
              </button>

              {/* Hamburger (Mobile) */}
              <button
                onClick={() => setMenuOpen(true)}
                className={`md:hidden ${iconButtonClass}`}
                aria-label="Open menu"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white dark:bg-gray-900 p-6 flex flex-col transition-colors">
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setMenuOpen(false);
                    }}
                    className={`rounded-md px-3 py-2 text-base font-medium transition
                      ${
                        isActive
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                          : "text-gray-800 dark:text-gray-200 hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-purple-900/30"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto">
              <a
                href="/Navya_MK.pdf"
                download
                className="block w-full rounded-md bg-purple-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
