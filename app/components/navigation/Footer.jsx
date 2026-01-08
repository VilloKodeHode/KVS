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
      <footer className="bg-KVS-black/50 backdrop-blur-md text-KVS-white py-20 mt-32 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
          
          {/* Column 1: Contact Info */}
          <div className="flex flex-col gap-8 w-full">
             <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white tracking-tight">Kontakt</h4>
                <div className="w-12 h-1 bg-KVS-secondary rounded-full" />
             </div>
             
             <div className="flex flex-col gap-5 text-gray-300">
                <a className="hover:text-KVS-secondary transition-all duration-300 flex items-center gap-4 group" href="mailto:Vegardkristensen4@gmail.com?subject=Kundehendvendelse">
                  <span className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-KVS-secondary/10 group-hover:border-KVS-secondary/30 group-hover:scale-110 transition-all"><FiMail className="w-5 h-5" /></span>
                  <span className="text-lg">Vegardkristensen4@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 group cursor-default">
                  <span className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-KVS-secondary/10 transition-all"><FiPhone className="w-5 h-5" /></span>
                  <span className="text-lg">+47 992 33 904</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                   <span className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-KVS-secondary/10 transition-all"><FiMapPin className="w-5 h-5" /></span>
                   <span className="text-lg">Ekebergveien 61, 3085 Holmestrand</span>
                </div>
             </div>
          </div>

          {/* Column 2: Legal / Social */}
          <div className="flex flex-col gap-8 w-full">
            <div className="space-y-2">
               <h4 className="text-2xl font-bold text-white tracking-tight">Informasjon</h4>
               <div className="w-12 h-1 bg-KVS-secondary rounded-full" />
            </div>

            <div className="flex flex-col gap-5 text-gray-300">
              <a className="hover:text-KVS-secondary transition-all duration-300 flex items-center gap-4 group" href="https://www.instagram.com/kvstrefelling">
                <span className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-KVS-secondary/10 group-hover:border-KVS-secondary/30 group-hover:scale-110 transition-all"><SiInstagram className="w-5 h-5" /></span>
                <span className="text-lg">Følg oss på Instagram</span>
              </a>
              <div className="flex items-center gap-4 group cursor-default">
                 <span className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-KVS-secondary/10 transition-all"><FaHelmetSafety className="w-5 h-5" /></span>
                 <span className="text-lg">Fullt forsikret i Tryg</span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                 <span className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-KVS-secondary/10 transition-all"><AiOutlineSafetyCertificate className="w-5 h-5" /></span>
                 <span className="text-lg">Org nr: 825 444 572</span>
              </div>
            </div>
          </div>

          {/* Column 3: Logo & CTA */}
          <div className="flex flex-col items-center lg:items-end justify-center w-full lg:text-right gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                <SimpleLogoComponent />
            </div>
            <p className="text-gray-400 max-w-xs lg:ml-auto">
                Din lokale ekspert på sikker trefelling og vedlikehold i hele Vestfold.
            </p>
          </div>

        </div>
      </footer>

      <section className="bg-black/80 py-12 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Kristensen Vedlikehold Service. Alle rettigheter reservert.</p>
                <div className="h-px w-24 bg-white/10" />
            </div>

            <div className="flex flex-col items-center gap-4 group">
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">Levert av</p>
                <a
                    target="_blank"
                    href="https://www.villoutvikling.com/"
                    className="transition-all duration-500 hover:scale-110 hover:brightness-125"
                >
                    <Image src="/images/logo/Villo_Utvikling_full-Logo-LM.png" width={220} height={100} alt="Villo Utvikling" className="opacity-60 hover:opacity-100 transition-opacity" />
                </a>
            </div>
        </div>
      </section>
    </>
  );
};
