"use client";

import { navLinks } from "@/constants/navLinks";
import Button from "@/app/components/Button";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import Logo from "../components/Logo";
import useClickOutside from "@/hooks/useClickOutside";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(
    mobileMenuRef,
    () => setIsMobileMenuOpen(false),
    isMobileMenuOpen,
  );

  return (
    <header className="fixed inset-x-0 inset-s-0 py-5">
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
        <Button size="sm" className="hidden md:flex">
          Contact Me
        </Button>

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

            <Button onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
