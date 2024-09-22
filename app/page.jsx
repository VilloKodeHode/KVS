
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/ServicesSection";
import Image from "next/image";
import { fetchInsta } from "./lib/instaFetch";
import { InstagramGallery } from "./components/InstaGallery/InstagramGallery";
import { ContactSection } from "./components/ContactSection";
import InstagramFeed from "./components/InstaGallery/InstaTest";
export default async function Home() {

const instaImages = await fetchInsta()



// const consoleLogImages = await fetchInsta().then(images => console.log(images))

const latestVideo = instaImages.data.find(
  (image) => image.media_type === "VIDEO"
);
const allVideos = instaImages.data.filter(
  (image) => image.media_type === "VIDEO"
);

const firstVideo = allVideos[0];
const secondVideo = allVideos[1];


const allImages = instaImages.data.filter(
  (image) => image.media_type !== "VIDEO"
);
const firstFourImages = allImages.slice(0, 4);
const firstImage = allImages.slice(0, 1);
// const check = await fetchInsta().then(images => console.log(images))
// const { blogPosts, sponsors } = await getContent()


  return (
    
    <>
      <HeroSection firstFourImages={firstFourImages} />
      <IntroSection latestVideo={latestVideo} firstVideo={firstVideo} />
      <ServicesSection />
      <ContactSection/>
      {/* <InstagramFeed/> */}
      <Image
        src="/images/logo/Logo-bg.svg"
        width="200"
        height="200"
        alt="KVS-logo"
        className="bg-logo h-[125vh] left-0 fixed -top-1/4 -z-10 w-full opacity-20 hover:scale-105 "
      />
    </>
  );
}
