import Image from "next/image";
import {
  SimpleLogoComponent,
  SimpleLogoOnlyTextComponent,
} from "./baseComponents/Logo";

export const IntroSection = async ({
  latestVideo,
  firstVideo,
  secondVideo,
}) => {
  return (
    <section className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center text-KVS-white relative z-10">
      <article className="flex flex-col gap-8 relative z-10">
        <SimpleLogoComponent />
        <h2 className="section-header text-left underline underline-offset-8 decoration-KVS-secondary/50">
          Utfører ditt oppdrag enkelt og effektivt, små og store i Vestfold!
        </h2>
        <div className="flex flex-col gap-6 text-left">
          <p className="text-xl leading-relaxed text-gray-100">
            Jeg er sertifisert tilkomsttekniker og har lang erfaring med
            taubasert metode offshore. Effektivt når det er begrenset med plass,
            men også for å unngå skade på nærliggende områder.
          </p>
          <p className="text-xl leading-relaxed text-gray-100">
            Står treet vanskelig til benyttes seksjonsfelling som metode – treet
            kuttes i mindre deler for en kontrollert og trygg nedfelling.
          </p>
          <p className="text-xl font-bold text-KVS-secondary mt-4">
            Ring meg for en hyggelig prat om ditt prosjekt - Vegard Kristensen!
          </p>
        </div>
      </article>

      <div className="relative">
        {/* Visual Card Effect for Media */}
        <div className="glass-card p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
          {firstVideo ? (
            <video
              loop
              muted
              autoPlay
              className="w-full max-h-[600px] object-cover rounded-xl shadow-2xl"
              src={firstVideo.media_url}
              alt={firstVideo.caption}
            />
          ) : (
            <img
              className="w-full max-h-[600px] object-cover rounded-xl shadow-2xl"
              src="/images/work/klatre-pose.webp"
              alt="Klatre pose"
            />
          )}
        </div>
      </div>
    </section>
  );
};
