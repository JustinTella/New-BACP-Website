import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type PageProps = {
  /** Appended to the site name in the browser tab. */
  title: string;
  children: ReactNode;
};

/** Header + main + footer chrome shared by every interior page. */
function Page({ title, children }: PageProps) {
  useEffect(() => {
    document.title = `${title} | Blue Angel Clinical Partners`;
  }, [title]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Page;
