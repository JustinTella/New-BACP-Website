import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Page from '@/components/Page';
import { PrimaryLink, OutlineLink } from '@/components/Buttons';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <Page title="Page not found">
      <section className="bg-white py-24 md:py-36">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steely-blue">
              404
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-navy sm:text-5xl">
              We could not find that page.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-foreground/80">
              The link may be out of date, or the page may have moved. Everything on the
              site is reachable from the home page or the menu above.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryLink to="/">Back to home</PrimaryLink>
              <OutlineLink to="/be-a-partner">Get in touch</OutlineLink>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default NotFound;
