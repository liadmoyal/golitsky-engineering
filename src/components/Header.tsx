"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "עמוד הבית", path: "/" },
    { name: "אודות החברה", path: "/info" },
    { name: "פרוייקטים", path: "/projects" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-border)] transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50 relative group">
          <img 
            src="/logo.jpg" 
            alt="גדליה אוליצקי הנדסה" 
            className="h-16 md:h-20 w-auto object-contain transition-opacity group-hover:opacity-80"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-[15px] font-medium transition-colors hover:text-[var(--color-accent)] ${
                pathname === link.path
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-navy-light)]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-[var(--color-accent)] ${
                pathname.includes("/research") || pathname.includes("/habitable-bridge")
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-navy-light)]"
              }`}
            >
              מחקר ופיתוח
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[var(--color-border)] overflow-hidden transition-all duration-200 ${
                isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link
                href="/research"
                className="block px-4 py-3 text-sm text-[var(--color-slate-dark)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-accent)] transition-colors"
              >
                פרסומים
              </Link>
              <Link
                href="/habitable-bridge"
                className="block px-4 py-3 text-sm text-[var(--color-slate-dark)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-accent)] transition-colors"
              >
                גשרים למגורים
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-[15px] font-medium transition-colors hover:text-[var(--color-accent)] text-[var(--color-navy-light)]"
          >
            צרו קשר
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-[var(--color-navy)] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-[var(--color-navy)] hover:text-[var(--color-accent)]"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex flex-col items-center gap-6">
          <span className="text-xl font-bold text-[var(--color-slate-light)]">מחקר ופיתוח</span>
          <Link
            href="/research"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-[var(--color-navy)] hover:text-[var(--color-accent)]"
          >
             פרסומים
          </Link>
          <Link
            href="/habitable-bridge"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-[var(--color-navy)] hover:text-[var(--color-accent)]"
          >
            גשרים למגורים
          </Link>
        </div>
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-bold text-[var(--color-navy)] hover:text-[var(--color-accent)]"
        >
          צרו קשר
        </Link>
      </div>
    </header>
  );
}
