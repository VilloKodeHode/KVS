import { ContactButton, ServiceSectionButton } from "./Buttons";
import { HeroImageSlider } from "./HeroImageSlider";

export const HeroSection = ({ images }) => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-0">
      {/* Decorative Background Glow */}

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
        {/* Left Column: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 animate-slideInFromBottom order-2 lg:order-1">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-KVS-secondary text-sm font-semibold uppercase tracking-widest mb-4">
              Vestfold & Omegn
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
              Sikker Trefelling. <br />
              <span className="text-KVS-secondary">Profesjonelt</span> Utført.
            </h1>
          </div>

          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl">
            Vi håndterer alt fra vanskelige trær til tomterydding med presisjon
            og sikkerhet. Sertifisert kompetanse for din trygghet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <ContactButton />
            <ServiceSectionButton />
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
            <span className="flex items-center gap-2">✓ Gratis Befaring</span>
            <span className="flex items-center gap-2">✓ Forsikret</span>
            <span className="flex items-center gap-2">✓ Sertifisert</span>
          </div>
        </div>

        {/* Right Column: Visuals */}
        <div className="w-full relative animate-slideInRight order-1 lg:order-2">
          <HeroImageSlider images={images} />
        </div>
      </div>
    </section>
  );
};
