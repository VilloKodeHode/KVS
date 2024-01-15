import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/ServicesSection";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <Image
        src="/images/logo/Logo.svg"
        width="200"
        height="200"
        alt="KVS-logo"
        className="h-[600px] fixed -z-10 w-full opacity-20 hover:scale-105 "
      />
    </>
  );
}
