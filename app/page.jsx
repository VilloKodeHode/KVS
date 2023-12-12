export default function Home() {
  return (
    <>
      <section className="z-10 flex min-h-screen  flex-col items-center justify-start mt-24 p-24">
        <div className="HERO -z-10 fixed w-screen h-screen top-0" />
        <div className="z-10 flex flex-col text-white gap-8 text-center h-full">
          <h1 className="text-5xl">Velkommen til KVS</h1>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl">
              Usikker på hva du skal gjøre med treet som skygger for solen?
            </h2>
            <h3 className="text-6xl">Få en Gratis befaring.</h3>
            <h4 className="text-3xl">
              Ta kontakt for en uforpliktende prat, så finner vi en løsning.
            </h4>
            <button className="text-3xl text-white bg-KVS-primary w-fit py-4 px-8 rounded-full">
              Ta kontakt
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
