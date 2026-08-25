import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import logoHorizontal from "@/assets/logo-horizontal.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 shadow-[0_1px_0_rgba(14,42,71,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label={site.name}>
          <img
            src={logoHorizontal}
            alt="Blue Angel Clinical Partners"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-azure" : "text-navy/80 hover:text-navy"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to={site.cta.to} className="btn-primary py-2.5 px-6">
            {site.cta.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-full text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="container-x flex flex-col gap-1 pb-6">
            {site.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive ? "bg-white/70 text-azure" : "text-navy hover:bg-white/60"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to={site.cta.to} className="btn-primary mt-3 w-full">
              {site.cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
