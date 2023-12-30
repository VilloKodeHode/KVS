import { ContactIcon } from "../Icons";
import Image from "next/image";
import { SimpleLogoComponent } from "../baseComponents/Logo";
import { SiInstagram, SiPersonio } from "react-icons/si";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrOrganization } from "react-icons/gr";

export const Footer = () => {
  return (
    <>
      <footer
        id="#kontakt"
        className="bg-KVS-primary flex lg:flex-row flex-col justify-between w-full gap-8 items-center page-padding py-8 min-h-[50vh]"
      >
        {/* <section className="flex lg:flex-row flex-col items-center place-content-between"> */}
        <div className=" flex justify-center flex-col">
          <ContactIcon text="Vegardkristensen4@gmail.com">
            <FiMail />
          </ContactIcon>
          <ContactIcon text="+47 992 33 904">
            <FiPhone />
          </ContactIcon>
          <ContactIcon text="Ospebakken 6, 3153 Tønsberg">
            <FiMapPin />
          </ContactIcon>
          <ContactIcon text="KVS instagram">
            <SiInstagram />
          </ContactIcon>
          <ContactIcon text="Polis nummer: 037412836">
            <GrOrganization />
          </ContactIcon>
          <ContactIcon text="Org nummer: 825 444 572">
            <AiOutlineSafetyCertificate />
          </ContactIcon>
        </div>

        {/* </section> */}
        <SimpleLogoComponent />
      </footer>
      <section className="grid place-items-center bg-KVS-black h-10">
        <p className="text-KVS-white">
          Levert av{" "}
          <a
            className="underline text-[#858ee0]"
            href="https://www.jvwebconsult.no/"
          >
            <span>Villo Utvikling</span>
          </a>
        </p>
      </section>
    </>
  );
};
