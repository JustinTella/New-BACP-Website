import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/bacp-logo-horizontal.png';

const navLinks = [
  { path: '/why-blue-angel', label: 'Why Blue Angel' },
  { path: '/services', label: 'Services' },
  { path: '/resources', label: 'Resources' },
  { path: '/blog', label: 'Blog' },
];

const ctaLink = { path: '/be-a-partner', label: 'Be a Partner' };

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
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
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav — right */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-navy'
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
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
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`border-b border-navy/10 py-4 text-base font-medium ${
                  isActive(link.path) ? 'text-navy' : 'text-navy/70'
                }`}
              >
                {link.label}
              </Link>
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
