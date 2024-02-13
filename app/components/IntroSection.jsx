import {
  SimpleLogoComponent,
  SimpleLogoOnlyTextComponent,
} from "./baseComponents/Logo";

export const IntroSection = () => {
  return (
    <div className="flex flex-col gap-16 text-KVS-white items-center justify-center relative backdrop-blur-sm py-16">
      <div className="absolute-center w-screen shadow-KVS-primary shadow bg-KVS-primary bg-opacity-40 h-full" />
      <h2 className="section-header underline underline-offset-[6px]">
        KVS – utfører ditt oppdrag enkelt og effektivt, små og store i Vestfold!
      </h2>
      <p className="sub-header max-w-3xl">
        Står treet vanskelig til benyttes seksjonsfelling som metode- treet
        kuttes i mindre deler for en kontrollert og trygg nedfelling.
      </p>
      {/* <h2 className="section-header">Hvorfor velge oss:</h2> */}
      <div className="flex flex-col gap-16 text-center justify-center">
        <p className="sub-header max-w-3xl">
          Jeg er sertifisert tilkomsttekniker og har lang erfaring med taubasert
          metode offshore
        </p>
        <p className="sub-header max-w-3xl">
          Effektivt når det er begrenset med plass, men også for å unngå skade
          på nærliggende områder.
        </p>
        <p className="sub-header max-w-3xl">
          Ring meg for en hyggelig prat om ditt prosjekt- Vegard Kristensen!
        </p>
      </div>
      <div className="flex">
        <SimpleLogoOnlyTextComponent />
      </div>
    </div>
  );
};
