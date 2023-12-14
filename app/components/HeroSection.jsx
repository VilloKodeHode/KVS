import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="z-10 grid lg:grid-rows-none grid-rows-2 min-h-[calc(100vh-144px)] items-center">
      <div className="z-10 lg:absolute static -left-8 text-center text-[#050a0f] flex flex-col lg:w-[50%] gap-8 justify-center rounded-3xl shadow-black shadow bg-KVS-primary bg-opacity-40 p-16">
        {/* <figure className="flex items-center gap-4"> */}
        <h1 className="2xl:text-8xl text-6xl">
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
        <h2 className="text-2xl lg:text-3xl">
          Usikker på hva du skal gjøre med treet som skygger for solen?
        </h2>

        <h3 className="text-4xl lg:text-6xl">Få en Gratis befaring.</h3>
        <h4 className="text-2xl lg:text-3xl">
          Ta kontakt for en uforpliktende prat, så finner vi en løsning.
        </h4>
        <button className="text-3xl self-center text-white bg-KVS-primary w-fit py-4 px-8 rounded-full hover:scale-105 duration-100 active:scale-95">
          Ta kontakt
        </button>
      </div>
      {/* <div></div> */}
      <div className="grid gap-8 bg-KVS-primary bg-opacity-40 lg:w-[50%] py-12 z-10 rounded-3xl lg:pl-11 lg:px-0 px-12 shadow shadow-black justify-center items-center grid-cols-2 grid-rows-2 lg:absolute static -right-10">
        <Image
          width={800}
          height={800}
          src="/images/work/klatre-trekapp.webp"
          alt="KVS-logo"
          className="rounded-xl border-black w-full lg:h-[300px] h-[200px] opacity-75 duration-200 hover:opacity-100 object-cover"
        />
        <Image
          width={800}
          height={800}
          src="/images/work/klatre-trekapp-to.webp"
          alt="KVS-logo"
          className="rounded-xl border-black w-full opacity-75 duration-200 hover:opacity-100 object-top lg:h-[300px] h-[200px] object-cover"
        />
        <Image
          width={800}
          height={800}
          src="/images/work/kran-trekapp.webp"
          alt="KVS-logo"
          className="rounded-xl border-black w-full opacity-75 duration-200 hover:opacity-100 lg:h-[300px] h-[200px] object-top object-cover"
        />
        <Image
          width={800}
          height={800}
          src="/images/work/kuttet-ved.webp"
          alt="KVS-logo"
          className="rounded-xl border-black w-full opacity-75 duration-200 hover:opacity-100 lg:h-[300px] h-[200px] object-cover"
        />
      </div>
    </section>
  );
};
