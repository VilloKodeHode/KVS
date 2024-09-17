"use client";
import Image from "next/image";
import { ContactButton } from "./Buttons";
import { HeroGallery } from "./HeroGallery";

export const HeroSection = ({ firstFourImages, latestVideo }) => {
  return (
    <section className="z-10 gap-16 relative flex flex-col justify-center min-h-[calc(100dvh-112px)] items-center">
      <div className="animate-slideInRight">
        <div className="z-10 text-center p-4 ml:p-16 text-shadow text-KVS-white flex flex-col ml:gap-8 gap-4 h-fit justify-center">
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

      <div className="heroImages h-full absolute group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden w-screen right-1/2 -z-10 translate-x-1/2 opacity-50">
        {firstFourImages.map((image) => (
        <div className={``} key={image.id}>
            <img
              className="w-full h-full object-cover"
              src={image.media_url}
              alt={image.caption}
            />
        </div>
      ))}
      </div>

  

      {/* <HeroGallery /> */}
    </section>
  );
};
