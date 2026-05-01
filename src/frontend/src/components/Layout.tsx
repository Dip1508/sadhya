import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { Header } from "./Header";

const currentYear = new Date().getFullYear();
const hostname =
  typeof window !== "undefined" ? window.location.hostname : "sadhya.app";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground" data-ocid="footer">
        {/* Gold divider */}
        <div className="gold-divider opacity-30" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <p className="font-display font-bold tracking-[0.3em] text-2xl text-accent mb-2">
                SADHYA
              </p>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-primary-foreground/60 mb-6">
                The Kerala Table Supper Club
              </p>
              <p className="font-body text-sm leading-relaxed text-primary-foreground/70 italic">
                "Good Food. Good People. Meaningful Connections."
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-accent mb-5">
                Navigate
              </p>
              <ul className="space-y-3">
                {[
                  "About",
                  "Experience",
                  "The Menu",
                  "Events",
                  "Gallery",
                  "Reserve",
                ].map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => {
                        const id =
                          item === "Reserve"
                            ? "booking"
                            : item.toLowerCase().replace(/\s/g, "");
                        document
                          .querySelector(`#${id}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-smooth"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-accent mb-5">
                Connect
              </p>
              <p className="font-body text-sm text-primary-foreground/70 mb-2">
                WhatsApp / Phone
              </p>
              <a
                href="https://wa.me/919021445900"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp_link"
                className="font-display text-xl text-accent hover:text-accent/80 transition-smooth block mb-6"
              >
                +91 90214 45900
              </a>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.instagram_link"
                  aria-label="Instagram"
                  className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:border-accent hover:text-accent transition-smooth"
                >
                  <SiInstagram size={16} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.facebook_link"
                  aria-label="Facebook"
                  className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:border-accent hover:text-accent transition-smooth"
                >
                  <SiFacebook size={16} />
                </a>
                <a
                  href="https://wa.me/919021445900"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.whatsapp_icon_link"
                  aria-label="WhatsApp"
                  className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:border-accent hover:text-accent transition-smooth"
                >
                  <SiWhatsapp size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="gold-divider opacity-20 mt-12 mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-primary-foreground/40">
              © {currentYear} SADHYA. All rights reserved.
            </p>
            <p className="font-body text-xs text-primary-foreground/40">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
