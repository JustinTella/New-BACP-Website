import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { site } from "@/content/site";
import logoWhite from "@/assets/logo-horizontal-white.png";

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy text-cream/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={logoWhite}
            alt="Blue Angel Clinical Partners"
            className="h-11 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            Financial and operational support for a network of independent,
            concierge physicians. Better for doctors. Better for patients.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm text-cream/90 hover:text-white"
          >
            <Mail size={16} /> {site.email}
          </a>
        </div>

        <div>
          <h4 className="font-serif text-cream text-base">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/70 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-cream text-base">Get in touch</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/contact" className="text-cream/70 hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/succession" className="text-cream/70 hover:text-white">
                Sell your practice
              </Link>
            </li>
            <li>
              <Link to="/joining" className="text-cream/70 hover:text-white">
                Join a practice
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Blue Angel Clinical Partners. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-cream/60 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-cream/60 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
