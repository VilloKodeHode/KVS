import { ContactIcon } from "../Icons";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-KVS-primary page-padding py-8 min-h-[50vh]">
      <section className="flex items-center justify-between">
        <div className=" flex justify-center gap-8 flex-col text-white">
          <ContactIcon src="person" text="Vegard Kristensen" />
          <ContactIcon src="mobile" text="+47 992 33 904" />
          <ContactIcon src="location" text="Ospenbakken 6, 3153 Tønsberg" />
          <ContactIcon src="instagram" text="KVS Trefelling" />
          <ContactIcon src="tryg" text="Polisnummer:" />
        </div>
        <figure>
          <Image
            width={340}
            height={256}
            src="/images/logo/KVS-logo.png"
            alt="logo"
            className="h-64"
          />
        </figure>
      </section>
      <section></section>
    </footer>
  );
};
