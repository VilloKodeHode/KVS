import Image from "next/image";
import { ServiceLocalIcon, ServiceReactIcon } from "./Icons";
import { GiWoodPile, GiBirchTrees } from "react-icons/gi";
import { GiAxeInStump } from "react-icons/gi";
import { FaTrailer } from "react-icons/fa6";
import { FaHelmetSafety } from "react-icons/fa6";

export const ServicesSection = () => {
  return (
    <section
      id="#tjenester"
      className="grid gap-16 py-24 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-3xl md:text-5xl mb-12 md:mb-20 text-KVS-white drop-shadow-lg">
          Mine Tjenester
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="glass-card p-8 flex flex-col items-center gap-6 text-center max-w-sm w-full group">
            <div className="text-6xl text-KVS-secondary group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
              <GiBirchTrees />
            </div>
            <h3 className="text-2xl font-bold text-white">Trefelling</h3>
            <p className="text-gray-200 leading-relaxed">
              Jeg trimmer bort greiner eller feller hele trær om det er
              nødvendig. Vanskelige trær seksjonsfelles sikkert og effektivt.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center gap-6 text-center max-w-sm w-full group">
            <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
              <Image
                src="/images/service-icons/KVS-mono.svg"
                fill
                alt="Soft sertifisert"
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white">Tilkomstteknikk</h3>
            <p className="text-gray-200 leading-relaxed">
              Jeg utfører flere typer arbeider i tau. Dette er skånsomt for
              omgivelsene og effektivt på trange plasser.
            </p>
            <span className="bg-KVS-secondary/20 text-KVS-secondary px-3 py-1 rounded-full text-sm font-semibold border border-KVS-secondary/50">
              Soft-sertifisert
            </span>
          </div>

          <div className="glass-card p-8 flex flex-col items-center gap-6 text-center max-w-sm w-full group">
            <div className="text-6xl text-KVS-secondary group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
              <GiWoodPile />
            </div>
            <h3 className="text-2xl font-bold text-white">Ved</h3>
            <p className="text-gray-200 leading-relaxed">
              Dersom du ønsker trevirket som ved, kapper jeg det opp til ønsket
              lengde på stedet.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center gap-6 text-center max-w-sm w-full group">
            <div className="text-6xl text-KVS-secondary group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
              <GiAxeInStump />
            </div>
            <h3 className="text-2xl font-bold text-white">Stubbefresing</h3>
            <p className="text-gray-200 leading-relaxed">
              Jeg freser bort stubber etter felling, og kan også komme på
              befaring for å fjerne gamle stubber.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center gap-6 text-center max-w-sm w-full group">
            <div className="text-6xl text-KVS-secondary group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
              <FaTrailer />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Rydding & Bortkjøring
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Full opprydding og bortkjøring av kvist og stammer gjennomføres
              dersom det er ønskelig.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center gap-6 text-center max-w-sm w-full group">
            <div className="text-6xl text-KVS-secondary group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
              <FaHelmetSafety />
            </div>
            <h3 className="text-2xl font-bold text-white">Forsikring</h3>
            <p className="text-gray-200 leading-relaxed">
              Sikkerhet er førsteprioritet. Jeg er fullt forsikret gjennom Tryg
              for din trygghet.
            </p>
            <span className="bg-KVS-secondary/20 text-KVS-secondary px-3 py-1 rounded-full text-sm font-semibold border border-KVS-secondary/50">
              Forsikret i Tryg
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
