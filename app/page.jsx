
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/ServicesSection";
import Image from "next/image";
import { fetchInsta } from "./lib/instaFetch";
import { InstagramGallery } from "./components/InstaGallery/InstagramGallery";
export default async function Home() {


const instaImages = await fetchInsta()
const check = await fetchInsta().then(images => console.log(images))
// const { blogPosts, sponsors } = await getContent()

  return (
    
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <InstagramGallery instaImages={instaImages} />
      <Image
        src="/images/logo/Logo-bg.svg"
        width="200"
        height="200"
        alt="KVS-logo"
        className="h-[125%] fixed -top-1/4 -z-10 w-full opacity-20 hover:scale-105 "
      />
    </>
  );
}
