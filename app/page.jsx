
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/ServicesSection";
import Image from "next/image";
import { fetchInsta } from "./lib/instaFetch";
import { InstagramGallery } from "./components/InstaGallery/InstagramGallery";
export default async function Home() {


const instaImages = await fetchInsta()
// const check = await fetchInsta().then(images => console.log(images))
// const { blogPosts, sponsors } = await getContent()
//TODO: Add contact form, intro video?,

/*TODO
Evt at det hadde gått an at bildene fra insta ruller over siden et eller annet sted- 
for da vil de nyeste bildene han legger ut dukke opp. Hvis det ikke blir mye greier da 🙂
*/
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
