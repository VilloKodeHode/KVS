import { AltContactForm } from "./ContactForm/ContactForm";

export const ContactSection = () => {
  return(
    <section id="#kontakt" className="grid gap-8 text-KVS-white items-center justify-center relative backdrop-blur-sm py-16">
      <div className="absolute-center w-screen shadow-KVS-primary shadow bg-KVS-primary bg-opacity-40 h-full" />
      <h2 className="section-header">Kontakt meg for en uforpliktende befaring</h2>
      <AltContactForm />
    </section>
  );
};
