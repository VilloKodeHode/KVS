import { AltContactForm } from "./ContactForm/ContactForm";

export const ContactSection = () => {
  return (
    <section
      id="#kontakt"
      className="relative py-24 px-6 md:py-32 overflow-hidden z-10">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-KVS-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl">
        <div className="glass-panel p-8 md:p-16 border-white/10 flex flex-col items-center gap-12 relative overflow-hidden">
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl -mr-16 -mt-16 rounded-full" />

          <h2 className="text-3xl md:text-5xl font-bold text-center text-white leading-tight max-w-2xl">
            Kontakt meg for en{" "}
            <span className="text-KVS-secondary">uforpliktende</span> befaring
          </h2>

          <AltContactForm />
        </div>
      </div>
    </section>
  );
};
