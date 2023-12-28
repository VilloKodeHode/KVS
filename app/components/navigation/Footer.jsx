import { ContactIcon } from "../Icons";
import Image from "next/image";
import { SimpleLogoComponent } from "../baseComponents/Logo";
import { SiInstagram, SiPersonio } from "react-icons/si";
import { FiMail, FiPhone, FiMapPin  } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
    <footer id="#kontakt" className="bg-KVS-primary page-padding py-8 min-h-[50vh]">
      <section className="flex lg:flex-row flex-col items-center justify-between">
        <div className=" flex justify-center flex-col">
        <ContactIcon text="Vegardkristensen4@gmail.com">
            <FiMail />
          </ContactIcon>
          <ContactIcon text="+47 992 33 904">
            <FiPhone />
          </ContactIcon>
          <ContactIcon text="Ospenbakken 6, 3153 Tønsberg">
            <FiMapPin />
          </ContactIcon>
          <ContactIcon text="KVS instagram">
            <SiInstagram />
          </ContactIcon>
          <ContactIcon text="Polis nummer: 037412836">
          <AiOutlineSafetyCertificate />
          </ContactIcon>
          <ContactIcon text="Org nummer: kommer her">
          <AiOutlineSafetyCertificate />
          </ContactIcon>
          {/* 
    
          <ContactIcon src="instagram" text="KVS Trefelling" />
          <ContactIcon src="tryg" text="Polisnummer:" /> */}
     
        </div>
        <SimpleLogoComponent/>
        {/* <figure>
          <Image
            width={340}
            height={256}
            src="/images/logo/KVS-logo.png"
            alt="logo"
            className="h-64"
          />
        </figure> */}
      </section>

    </footer>
          <section className="grid place-items-center bg-KVS-black h-10">
            <p className="text-KVS-white">Levert av Villo Utvikling</p>
          </section>
          </>
  );
};
