import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/ServicesSection";
import Image from "next/image";
import { ContactSection } from "./components/ContactSection";
import { staticImages } from "./data/images";

export default function Home() {
  const allImages = staticImages;
  const firstVideo = null; // No static video available yet

  return (
    <>
      <HeroSection images={allImages} />
      <IntroSection firstVideo={firstVideo} />
      <ServicesSection />
      <ContactSection />
      <Image
        src="/images/logo/Logo-bg.svg"
        width="200"
        height="200"
        alt="KVS-logo"
        className="bg-logo h-[150vh] left-0 fixed -top-1/4 -z-20 w-full opacity-5 blur-sm pointer-events-none select-none"
      />
    </>
  );
}
