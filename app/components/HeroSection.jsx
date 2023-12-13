import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="z-10 grid min-h-[calc(100vh-144px)] items-center">
      <div className="z-10 absolute -left-8 text-[#050a0f] flex flex-col text-start gap-8 justify-center rounded-3xl shadow-black shadow bg-KVS-primary bg-opacity-40 p-16">
        {/* <figure className="flex items-center gap-4"> */}
        <h1 className="text-8xl">
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
        <h2 className="text-3xl">
          Usikker på hva du skal gjøre med treet som skygger for solen?
        </h2>

        <h3 className="text-6xl">Få en Gratis befaring.</h3>
        <h4 className="text-3xl">
          Ta kontakt for en uforpliktende prat, så finner vi en løsning.
        </h4>
        <button className="text-3xl text-white bg-KVS-primary w-fit py-4 px-8 rounded-full hover:scale-105 duration-100 active:scale-95">
          Ta kontakt
        </button>
      </div>
      {/* <div></div> */}
      <div className="grid gap-8 bg-KVS-primary bg-opacity-40 py-12 z-10 rounded-3xl pl-11 shadow shadow-black justify-center items-center grid-cols-2 grid-rows-2 absolute -right-10">
        <Image
          width={800}
          height={800}
          src="/images/work/klatre-trekapp.webp"
          alt="KVS-logo"
          className="rounded-xl border-black w-full h-[300px] opacity-75 duration-200 hover:opacity-100 object-cover"
        />
        <Image
          width={800}
          height={800}
          src="/images/work/klatre-trekapp-to.webp"
          alt="KVS-logo"
          className="rounded-xl border-black w-full opacity-75 duration-200 hover:opacity-100 object-top h-[300px] object-cover"
        />
        <Image
          width={800}
          height={800}
          src="/images/work/kran-trekapp.webp"
          alt="KVS-logo"
          className="rounded-xl border-black w-full opacity-75 duration-200 hover:opacity-100 h-[300px] object-top object-cover"
        />
        <Image
          width={800}
          height={800}
          src="/images/work/kuttet-ved.webp"
          alt="KVS-logo"
          className="rounded-xl border-black w-full opacity-75 duration-200 hover:opacity-100 h-[300px] object-cover"
        />
      </div>
    </section>
  );
};
