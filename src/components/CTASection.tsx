import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function CTASection() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-5 py-12 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-azure/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="display text-center text-3xl text-cream sm:text-4xl">
              Start the conversation.
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
