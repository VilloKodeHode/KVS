"use client";
import { ContactButton } from "./Buttons";
import { HeroGallery } from "./baseComponents/HeroImage";

export const HeroSection = () => {
  return (
    <section className="z-10 gap-16 xl:mt-0 mt-16 flex xl:flex-row flex-col justify-between min-h-[calc(100vh-112px)] items-center">
      <div className="animate-slideInRight">
        <div className="z-10 text-center p-4 ml:p-16 text-KVS-white flex flex-col ml:gap-8 gap-4 h-fit justify-center bg-opacity-40 backdrop-blur-sm">
          <h1 className="main-header">Velkommen til KVS</h1>

          <h2 className="large-paragraph hidden sm:block">
            Usikker på hva du skal gjøre med treet som skygger for solen?
          </h2>

          <h3 className="section-header">
            Få en <span className="uppercase text-KVS-secondary">gratis</span>{" "}
            befaring.
          </h3>
          <h4 className="large-paragraph hidden sm:block">
            Ta kontakt for en uforpliktende prat, så finner vi en løsning.
          </h4>
          <ContactButton />
        </div>
      </div>
      <HeroGallery />
    </section>
  );
};
