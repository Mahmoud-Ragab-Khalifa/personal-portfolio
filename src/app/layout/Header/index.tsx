import { navLinks } from "@/constants/navLinks";
import Logo from "../components/Logo";
import Button from "@/app/components/Button";

const Header = () => {
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
      </nav>
    </header>
  );
};

export default Header;
