import { socialMediaLinks } from "@/constants/socialMediaLinks";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { FcDownload } from "react-icons/fc";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <a
            href="#"
            className="glow-text text-primary text-xl font-bold tracking-tight"
          >
            Mahmoud Ragab
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} Mahmoud Ragab. All rights reserved.
          </p>
        </div>

        {/* View Resume CTA */}
        <AnimatedBorderButton
          href="/resume/MahmoudRagabResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FcDownload className="w-5 h-5 animate-bounce" />
          View Resume
        </AnimatedBorderButton>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialMediaLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
