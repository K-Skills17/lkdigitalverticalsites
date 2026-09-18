"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 60;
          if (isScrolled !== scrolledRef.current) {
            scrolledRef.current = isScrolled;
            setScrolled(isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#122D4A]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-[#122D4A]/80 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Logo variant="compact" color="white" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#DC6D25] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#diagnostico"
              className="inline-flex items-center px-5 py-2.5 bg-[#DC6D25] hover:bg-[#c05d1c] text-white text-sm font-medium rounded-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg hover:shadow-[#DC6D25]/25"
            >
              Diagnosticar minha operação
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-1.5"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#122D4A] flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <div
            key={link.href}
            className={`transition-all duration-300 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: mobileOpen ? `${i * 50 + 100}ms` : "0ms" }}
          >
            <a
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-display text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </div>
        ))}
        <div
          className={`transition-all duration-300 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: mobileOpen ? "350ms" : "0ms" }}
        >
          <a
            href="#diagnostico"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex px-8 py-3 bg-[#DC6D25] text-white rounded-md font-medium"
          >
            Diagnosticar minha operação
          </a>
        </div>
      </div>
    </>
  );
}
