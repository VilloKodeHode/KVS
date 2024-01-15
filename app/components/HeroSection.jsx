"use client";
import { ContactButton } from "./Buttons";
import { HeroGallery } from "./baseComponents/HeroImage";

export const HeroSection = () => {
  return (
    <section className="z-10 gap-16 xl:mt-0 mt-16 flex xl:flex-row flex-col justify-between min-h-[calc(100vh-152px)] items-center">
      <div className="animate-slideInRight">
        <div className="z-10 text-center p-4 ml:p-8 text-KVS-white flex flex-col ml:gap-8 gap-4 h-fit justify-center rounded-3xl shadow-KVS-primary shadow bg-KVS-primary bg-opacity-40 backdrop-blur-sm">
          <h1 className="main-header">
            Velkommen til <span className="text-[#bad7f3]">KVS</span>
          </h1>

          <h2 className="text-2xl lg:text-3xl hidden sm:block">
            Usikker på hva du skal gjøre med treet som skygger for solen?
          </h2>

          <h3 className="text-4xl lg:text-5xl">Få en Gratis befaring.</h3>
          <h4 className="text-2xl lg:text-3xl hidden sm:block">
            Ta kontakt for en uforpliktende prat, så finner vi en løsning.
          </h4>
          <ContactButton />
        </div>
      </div>
      <HeroGallery />
    </section>
  );
};
