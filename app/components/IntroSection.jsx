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
  console.log("firstVideo", firstVideo);

  return (
    <section className="grid lg:grid-cols-2 lg:grid-row-1 grid-row-2 gap-16 text-KVS-white items-center justify-center relative backdrop-blur-sm py-16">
      <div className="absolute-center w-screen shadow-KVS-primary shadow bg-KVS-primary bg-opacity-40 h-full" />
      <article className="flex flex-col gap-8 relative">
        <SimpleLogoComponent />
        <h2 className="section-header underline underline-offset-[6px]">
          Utfører ditt oppdrag enkelt og effektivt, små og store i Vestfold!
        </h2>
        <div className="flex flex-col gap-8 text-center justify-center">
          <p className="large-paragraph max-w-3xl">
            Jeg er sertifisert tilkomsttekniker og har lang erfaring med
            taubasert metode offshore. Effektivt når det er begrenset med plass,
            men også for å unngå skade på nærliggende områder. Står treet
            vanskelig til benyttes seksjonsfelling som metode- treet kuttes i
            mindre deler for en kontrollert og trygg nedfelling.
          </p>
          <p className="large-paragraph max-w-3xl">
            Ring meg for en hyggelig prat om ditt prosjekt - Vegard Kristensen!
          </p>
        </div>
      </article>
      <div className="flex justify-center items-center relative">
        <Image
          src="/images/contact-icons/instagram.png"
          width={30}
          height={30}
          alt="Instagram logo"
          className="absolute top-2 right-2 hover:scale-110 transition duration-300"
        />
        {/* <video
          loop
          muted
          autoPlay
          className="w-full max-h-[500px] object-cover"
          src={firstVideo.media_url}
          alt={firstVideo.caption}
        /> */}
      </div>
    </section>
  );
};
