import Image from "next/image";
import { ServiceLocalIcon, ServiceReactIcon } from "./Icons";
import { GiWoodPile, GiBirchTrees } from "react-icons/gi";
import { GiAxeInStump } from "react-icons/gi";
import { FaTrailer } from "react-icons/fa6";
import { FaHelmetSafety } from "react-icons/fa6";

export const ServicesSection = () => {
  return (
    <section id="#tjenester" className="grid gap-16 mb-36">
      <h1 className="text-4xl text-center text-KVS-white">Tjenester</h1>
      <div className="flex flex-wrap justify-center gap-2">
        <ServiceReactIcon
          text="Jeg trimmer bort greiner eller feller hele trær om det er nødvendig."
          title="Trefelling"
        >
          <GiBirchTrees />
        </ServiceReactIcon>

        <ServiceReactIcon
          title="Ved"
          text="Dersom du ønsker trevirket som ved, kappes det opp til ønsket lengde."
        >
          <GiWoodPile />
        </ServiceReactIcon>

        <ServiceReactIcon
          title="Stubbefresing"
          text="Jeg freser gjerne bort stubber etter felling, kan også komme på befaring for tidligere."
        >
          <GiAxeInStump />
        </ServiceReactIcon>

        <ServiceReactIcon
          text="Bortkjøring og opprydding gjennomføres også dersom ønskelig."
          title="Rydding"
        >
          <FaTrailer />
        </ServiceReactIcon>

        <ServiceReactIcon
          text="Forsikring er en selvfølge, derfor er jeg forsikret igjennom Tryg."
          label="Forsikret i Tryg"
          title="Forsikring"
        >
          <FaHelmetSafety />
        </ServiceReactIcon>

        <ServiceLocalIcon
          src="KVS-icon-blue.svg"
          text="Jeg utfører flere typer arbeider i tau. Kontakt meg gjerne så finner vi ut av ditt prosjekt."
          label="Soft-sertifisert"
          title="Tilkomstteknikk"
        />
      </div>
    </section>
  );
};
