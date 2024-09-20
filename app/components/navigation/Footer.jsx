import { ContactIcon } from "../Icons";
import Image from "next/image";
import { SimpleLogoComponent } from "../baseComponents/Logo";
import { SiInstagram, SiPersonio } from "react-icons/si";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrOrganization } from "react-icons/gr";
import { FaHelmetSafety } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer
  
        className="bg-KVS-primary flex mt-36 lg:flex-row flex-col justify-between w-full gap-8 items-center page-padding py-8 min-h-[50vh]"
      >
        {/* <section className="flex lg:flex-row flex-col items-center place-content-between"> */}
        <div className=" flex justify-center flex-col sm:flex-row lg:flex-col xl:flex-row">
          <div>
            <a
              className="hover:underline text-KVS-white"
              href="mailto:Vegardkristensen4@gmail.com?subject=Kundehendvendelse"
            >
              <ContactIcon text="Vegardkristensen4@gmail.com">
                <FiMail />
              </ContactIcon>
            </a>
            <ContactIcon text="+47 992 33 904">
              <FiPhone />
            </ContactIcon>
            <ContactIcon text="Ospebakken 6, 3153 Tønsberg">
              <FiMapPin />
            </ContactIcon>
          </div>
          <div>
          <a className="h-full hover:underline text-KVS-white w-full" href="https://www.instagram.com/kvstrefelling">
            <ContactIcon text="KVS instagram">
              <SiInstagram />
            </ContactIcon>
            </a>
            <ContactIcon text="Forsikret i: Tryg forsikring">
              <FaHelmetSafety />
            </ContactIcon>
            <ContactIcon text="Org nummer: 825 444 572">
              <AiOutlineSafetyCertificate />
            </ContactIcon>
          </div>
        </div>
        <div>
        <Image
      src="/images/logo/full-logo-alternative.png"
       width="400"
       height="400"
       alt="KVS-logo"
        className={`z-50 m-4 md:h-48 h-24 w-full`}
      />
      </div>
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
