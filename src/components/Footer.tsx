import { Link } from 'react-router-dom';
import { site } from '@/content/blueangel';

/**
 * Mirrors the footer on the live blueangelclinical.com: a quiet white bar with
 * the two legal links and the copyright line, nothing else.
 */
function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            to="/privacy-policy"
            className="text-sm text-foreground/55 transition-colors hover:text-steely-blue"
          >
            Privacy Policy
          </Link>
          <span className="hidden text-navy/25 sm:inline">|</span>
          <Link
            to="/terms-of-service"
            className="text-sm text-foreground/55 transition-colors hover:text-steely-blue"
          >
            Terms of Service
          </Link>
        </div>
        <p className="text-center text-sm text-foreground/55">
          ©{new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
