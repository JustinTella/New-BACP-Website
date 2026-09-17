import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImage from '@/assets/bacp-logo-horizontal.png';
import { navLinks, ctaLink } from '@/content/blueangel';

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number>();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // A section counts as active for its own path and anything beneath it.
  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setOpenMenu(null);
  };

  // A short close delay keeps the menu open while the pointer crosses the gap
  // between the trigger and the panel.
  const openNow = (path: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenMenu(path);
  };
  const closeSoon = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-[0_1px_0_rgba(6,56,98,0.10)] backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo — top left */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex shrink-0 items-center"
          aria-label="Blue Angel Clinical Partners — home"
        >
          <img
            src={logoImage}
            alt="Blue Angel Clinical Partners"
            loading="eager"
            fetchpriority="high"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav — right */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => openNow(link.path)}
                onMouseLeave={closeSoon}
                onFocus={() => openNow(link.path)}
                onBlur={closeSoon}
              >
                <Link
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  aria-expanded={openMenu === link.path}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive(link.path) ? 'text-navy' : 'text-navy/70 hover:text-navy'
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openMenu === link.path ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  />
                </Link>

                {openMenu === link.path && (
                  <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4">
                    <div className="border border-navy/10 bg-white py-2 shadow-[0_20px_50px_rgba(6,56,98,0.13)]">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={(e) => handleNavClick(e, child.path)}
                          className={`block px-5 py-3 text-sm font-medium transition-colors ${
                            isActive(child.path)
                              ? 'bg-light-gray text-navy'
                              : 'text-navy/70 hover:bg-light-gray hover:text-navy'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(link.path) ? 'text-navy' : 'text-navy/70 hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to={ctaLink.path}
            onClick={(e) => handleNavClick(e, ctaLink.path)}
            className="border border-navy bg-navy px-6 py-2.5 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-transparent hover:text-navy"
          >
            {ctaLink.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center text-navy lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <div key={link.path} className="border-b border-navy/10">
                <Link
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`block py-4 text-base font-medium ${
                    isActive(link.path) ? 'text-navy' : 'text-navy/70'
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mb-3 flex flex-col border-l border-navy/10 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={(e) => handleNavClick(e, child.path)}
                        className={`py-2.5 text-sm font-medium ${
                          isActive(child.path) ? 'text-navy' : 'text-navy/60'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to={ctaLink.path}
              onClick={(e) => handleNavClick(e, ctaLink.path)}
              className="mt-5 bg-navy px-6 py-3.5 text-center text-sm font-medium tracking-wide text-white"
            >
              {ctaLink.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
