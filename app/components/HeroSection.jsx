import Image from "next/image";
import { ContactButton } from "./Buttons";

export const HeroSection = () => {
  return (
    <section className="z-10 gap-16 xl:mt-0 mt-16 flex xl:flex-row flex-col justify-between min-h-[calc(100vh-152px)] items-center">
      <div className="animate-slideInRight">
        {/* <div className="absolute-center lg:hidden h-[130%] w-screen shadow-black shadow bg-KVS-primary bg-opacity-40"></div> */}
        <div className="z-10  text-center p-4 ml:p-8 text-KVS-white flex flex-col ml:gap-8 gap-4 h-fit justify-center rounded-3xl shadow-black shadow bg-KVS-primary bg-opacity-40">
          {/* <figure className="flex items-center gap-4"> */}
          <h1 className="xl:text-7xl text-5xl text-center">
            Velkommen til <span className="text-[#bad7f3]">KVS</span>
          </h1>
          {/* <Image
            width={200}
            height={200}
            src="/images/logo/KVS-logo-cutout.png"
            alt="logo"
            className="h-fit w-fit object-cover z-10 rounded-md"
          /> */}
          {/* </figure> */}
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
      <div className="animate-slideInLeft">
        <div className="grid gap-2 bg-KVS-primary md:grid-cols-2 md:grid-rows-2 bg-opacity-40 p-4 ml:p-8 z-10 rounded-3xl shadow shadow-black justify-center items-center">
        <figure className="h-[300px] w-full">
          <Image
            width={800}
            height={800}
            src="/images/work/klatre-trekapp.webp"
            alt="KVS-logo"
className="rounded-xl border-black w-full h-full opacity-75 duration-200 hover:opacity-100 object-cover"
          />
          </figure>
        <figure className="h-[300px] w-full">
          <Image
            width={800}
            height={800}
            src="/images/work/klatre-trekapp-to.webp"
            alt="KVS-logo"
            className="rounded-xl border-black w-full h-full opacity-75 duration-200 hover:opacity-100 object-cover"
          />
          </figure>
        <figure className="h-[300px] w-full">
          <Image
            width={800}
            height={800}
            src="/images/work/kran-trekapp.webp"
            alt="KVS-logo"
            className="rounded-xl border-black w-full h-full opacity-75 duration-200 hover:opacity-100 object-cover"
          />
          </figure>
        <figure className="h-[300px] w-full">
          <Image
            width={800}
            height={800}
            src="/images/work/kuttet-ved.webp"
            alt="KVS-logo"
            className="rounded-xl border-black w-full h-full opacity-75 duration-200 hover:opacity-100 object-cover"
          />
          </figure>
        </div>
      </div>
    </section>
  );
};
