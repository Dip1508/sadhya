import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#menu", label: "The Menu" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Reserve" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-warm-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-ocid="sadhya.logo_link"
            className="group flex items-center gap-2"
          >
            <span
              className={`font-display font-bold tracking-[0.25em] text-xl transition-smooth ${
                scrolled ? "text-primary" : "text-card"
              }`}
            >
              SADHYA
            </span>
            <span
              className={`hidden sm:block h-4 w-px transition-smooth ${
                scrolled ? "bg-border" : "bg-card/40"
              }`}
            />
            <span
              className={`hidden sm:block font-body text-xs tracking-[0.1em] uppercase transition-smooth ${
                scrolled ? "text-muted-foreground" : "text-card/70"
              }`}
            >
              Kerala Table
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                data-ocid={`nav.${link.label.toLowerCase().replace(/\s/g, "_")}_link`}
                className={`font-body text-sm tracking-wide transition-smooth hover:opacity-70 ${
                  scrolled ? "text-foreground" : "text-card/90"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => handleNavClick("#booking")}
              data-ocid="nav.book_seat_button"
              variant="outline"
              size="sm"
              className={`hidden md:inline-flex font-body tracking-wider text-xs transition-smooth ${
                scrolled
                  ? "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  : "border-card/60 text-card hover:bg-card/10"
              }`}
            >
              Book a Seat
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.mobile_menu_toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`md:hidden p-2 rounded-md transition-smooth ${
                scrolled ? "text-foreground" : "text-card"
              }`}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-card/98 backdrop-blur-md border-t border-border`}
      >
        <nav
          className="px-6 py-4 flex flex-col gap-1"
          data-ocid="nav.mobile_menu"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              data-ocid={`nav.mobile_${link.label.toLowerCase().replace(/\s/g, "_")}_link`}
              className="font-body text-sm tracking-wide text-foreground py-3 text-left border-b border-border/40 last:border-0 hover:text-accent transition-smooth"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => handleNavClick("#booking")}
            data-ocid="nav.mobile_book_button"
            className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90 font-body tracking-wider text-xs"
          >
            Book a Seat
          </Button>
        </nav>
      </div>
    </header>
  );
}
