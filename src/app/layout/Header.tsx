"use client";

import { navLinks } from "@/constants/navLinks";
import { baseClasses } from "@/app/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import useClickOutside from "@/hooks/useClickOutside";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(
    mobileMenuRef,
    () => setIsMobileMenuOpen(false),
    isMobileMenuOpen,
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-100 inset-x-0 inset-s-0 ${isScrolled ? "bg-surface py-4" : "bg-transparent py-5"} transition-all duration-300`}
    >
      <nav className="container flex items-center justify-between">
        {/* Personal Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Contact Me Button In Desktop View*/}

        <a
          href="https://wa.me/201067055256"
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} px-4! py-2! text-sm! hidden! md:flex!`}
        >
          Contact Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer bg-surface rounded-full"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden mt-5 glass-strong animate-fade-in"
          ref={mobileMenuRef}
        >
          <div className="container mx-auto py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors duration-300 first:pt-0"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/201067055256"
              onClick={() => setIsMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseClasses}`}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
