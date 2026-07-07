"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md" : "border-b border-border"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative h-12 w-32 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/logo.jpg" 
                alt="גדליה אוליצקי הנדסה" 
                fill 
                className="object-contain object-right"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 text-sm font-medium text-slate hover:text-accent transition-colors duration-300 rounded-lg hover:bg-surface-alt"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="mr-3 px-5 py-2.5 text-sm font-bold text-white bg-accent hover:bg-accent-dark rounded-xl transition-all duration-300 shadow-sm"
            >
              צרו קשר
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-slate-dark hover:bg-surface-alt rounded-lg transition-colors"
            aria-label={isMobileOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 transition-all duration-300 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto bg-white"
            : "opacity-0 pointer-events-none bg-white"
        }`}
      >
        <div className="relative flex flex-col items-center gap-2 pt-8 px-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="w-full text-center py-4 text-lg font-medium text-slate hover:text-accent hover:bg-surface-alt rounded-xl transition-all duration-300"
              style={{
                transitionDelay: isMobileOpen ? `${i * 50}ms` : "0ms",
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
