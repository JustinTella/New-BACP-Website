import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

function Heading({ children }: { children: string }) {
  return <h2 className="pt-4 text-2xl text-navy">{children}</h2>;
}

export default function TermsOfService() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" lede="Last updated: October 30, 2025" />

      <section className="container-x pb-16">
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-5 text-muted">
            <Heading>Agreement to Terms</Heading>
            <p>
              These Terms of Use constitute a legally binding agreement made between
              you, whether personally or on behalf of an entity (“you”) and Blue Angel
              Clinical Partners LLC (DBA “Blue Angel Clinical Partners”). In this
              document, “we”, “our”, or “us” refer to Blue Angel Clinical Partners
              (“Company,” “we,” “us,” or “our”), concerning your access to and use of
              the blueangelclinical.com website as well as any other media form, media
              channel, or mobile website related, linked, or otherwise connected
              thereto (collectively, the “Site”).
            </p>
            <p>
              By accessing or using the Site, you are acknowledging that you have read,
              understand, and agree, without limitation or qualification, to be bound
              by these Terms of Use.
            </p>

            <Heading>Intellectual Property Rights</Heading>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all
              source code, databases, functionality, software, website designs, audio,
              video, text, photographs, and graphics on the Site (collectively, the
              “Content”) and the trademarks, service marks, and logos contained therein
              (the “Marks”) are owned or controlled by us or licensed to us, and are
              protected by copyright and trademark laws and various other intellectual
              property rights and unfair competition laws of the United States,
              international copyright laws, and international conventions.
            </p>
            <p>
              No content or marks may be copied, reproduced, aggregated, republished,
              uploaded, posted, publicly displayed, encoded, translated, transmitted,
              distributed, sold, licensed, or otherwise exploited for any commercial
              purpose whatsoever, without our express prior written permission.
            </p>

            <Heading>User Representations</Heading>
            <p>
              By using the site, you represent and warrant that: (1) you have the legal
              capacity and you agree to comply with these Terms of Use; (2) you are not
              a minor in the jurisdiction in which you reside; (3) you will not access
              the Site through automated or non-human means, whether through a bot,
              script, or otherwise; (4) you will not use the Site for any illegal or
              unauthorized purpose; and (5) your use of the Site will not violate any
              applicable law or regulation.
            </p>

            <Heading>Prohibited Activities</Heading>
            <p>
              You may not access or use the Site for any purpose other than that for
              which we make the site available. The Site may not be used in connection
              with any commercial endeavors except those that are specifically endorsed
              or approved by us.
            </p>
            <p>As a user of the site, you agree not to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Systematically retrieve data or content from the Site to create or
                compile a collection, compilation, database, or directory without
                written permission from us.
              </li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
              <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees engaged in
                providing any portion of the Site to you.
              </li>
              <li>
                Use the Site as part of any effort to compete with us or otherwise use
                the Site and/or the Content for any revenue-generating endeavor or
                commercial enterprise.
              </li>
              <li>Use the Site to advertise or offer to sell goods and services.</li>
            </ul>

            <Heading>User Content</Heading>
            <p>
              When you transmit, upload, post, e-mail or otherwise make available data,
              text, software, music, sound, photographs, graphics, images, videos,
              messages or other materials (“User Content”) on the Site, you are
              entirely responsible for such User Content.
            </p>
            <p>
              You agree not to engage in or assist or encourage others to engage in
              transmitting, uploading, posting, e-mailing or otherwise making available
              on the Site User Content that (a) is unlawful, harmful, threatening,
              abusive, harassing, tortious, defamatory, vulgar, obscene, pornographic,
              libelous, invasive of another’s privacy, hateful, or racially, ethnically
              or otherwise objectionable; (b) you do not have a right to make available
              under any law or under contractual or fiduciary relationships; (c) is
              known by you to be false, inaccurate or misleading; (d) you were
              compensated for or granted any consideration by any third party; or (e)
              infringes any patent, trademark, trade secret, copyright or other
              proprietary rights of any party.
            </p>

            <Heading>Privacy Policy</Heading>
            <p>
              We care about data privacy and security. Please review our Privacy
              Policy. By using the Site, you agree to be bound by our Privacy Policy,
              which is incorporated into these Terms of Use. Please be advised the Site
              is hosted in the United States. If you access the Site from any other
              region of the world with laws or other requirements governing personal
              data collection, use, or disclosure that differ from applicable laws in
              the United States, then through your continued use of the Site, you are
              transferring your data to the United States, and you agree to have your
              data transferred and processed in the United States.
            </p>

            <Heading>Term and Termination</Heading>
            <p>
              These Terms of Use shall remain in full force and effect while you use
              the Site. Without limiting any other provision of these Terms of Use, we
              reserve the right to, in our sole discretion and without notice or
              liability, deny access to and use of the site (including blocking certain
              IP addresses), to any person for any reason or for no reason, including
              without limitation for breach of any representation, warranty, or covenant
              contained in these Terms of Use or any applicable law or regulation. We
              may terminate your use of the Site at any time, without warning, in our
              sole discretion.
            </p>

            <Heading>Corrections</Heading>
            <p>
              There may be information on the Site that contains typographical errors,
              inaccuracies, or omissions, including descriptions, pricing, availability,
              and various other information. We reserve the right to correct any errors,
              inaccuracies, or omissions and to change or update the information on the
              Site at any time, without prior notice.
            </p>

            <Heading>Indemnification</Heading>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our
              subsidiaries, affiliates, and all of our respective officers, partners,
              and employees, from and against any loss, damage, liability, claim, or
              demand, including reasonable attorney’s fees and expenses, made by any
              third party due to or arising out of: (1) use of the Site; (2) breach of
              these Terms of Use; (3) any breach of your representations and warranties
              set forth in these Terms of Use; or (4) any overt harmful act toward any
              other user of the Site with whom you connected via the Site.
            </p>
            <p>
              Notwithstanding the foregoing, we reserve the right, at your expense, to
              assume the exclusive defense and control of any matter for which you are
              required to indemnify us, and you agree to cooperate, at your own expense,
              with our defense of such claims. We will use reasonable efforts to notify
              you of any such claim, action, or proceeding which is subject to this
              indemnification upon becoming aware of it.
            </p>

            <Heading>Electronic Communication, Transactions, and Signatures</Heading>
            <p>
              Visiting the site, sending us emails, and completing online forms
              constitute electronic communications. You consent to receive electronic
              communications, and you agree that all agreements, notices, disclosures,
              and other communications we provide to you electronically, via email and
              on the Site, satisfy any legal requirement that such communication be in
              writing.
            </p>
            <p>
              YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS,
              AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
              RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE.
            </p>

            <Heading>Miscellaneous</Heading>
            <p>
              These Terms of Use and any policies or operating rules posted by us on
              the Site constitute the entire agreement and understanding between you and
              us. Our failure to exercise or enforce any right or provision of these
              Terms of Use shall not operate as a waiver of such right or provision.
            </p>
            <p>
              These Terms of Use operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at any time.
              We shall not be responsible or liable for any loss, damage, delay, or
              failure to act caused by any cause beyond our reasonable control.
            </p>

            <Heading>Contact Us</Heading>
            <p>
              In order to resolve a complaint regarding the Site or to receive further
              information regarding the use of the Site, please contact us at:
            </p>
            <address className="not-italic leading-relaxed text-navy">
              753 Colorado Ave
              <br />
              Palo Alto, California 94303
              <br />
              <a href="mailto:info@blueangelclinical.com" className="text-azure underline">
                info@blueangelclinical.com
              </a>
            </address>
          </div>
        </Reveal>
      </section>
    </>
  );
}
