import Link from "next/link";
import Image from "next/image";
import { LOGO } from "../../data/menu_list";



const LogoComponent = ({ onclick }) => {

  return (
    <Link onClick={onclick} key="home" href="/" className=" p-2 rounded-b">
      <Image

        src="/images/logo/KVS-full-logo-alternative.svg"
        width="200"
        height="200"
        alt="KVS-logo"
        className="z-20 h-24 w-full duration-200 lg:p-1 hover:scale-105 "
      />
    </Link>
  
  );
};

export const SimpleLogoComponent = () => {

  return (
    <div>
      <Image
      src="/images/logo/KVS-full-logo-alternative.svg"
       width="400"
       height="400"
       alt="KVS-logo"
        className={`z-50 m-4 md:h-48 h-24 w-full`}
      />
    </div>
  );
};


export const SimpleLogoOnlyTextComponent = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/logo/Logo.svg"
        width="400"
        height="400"
        alt="KVS-logo"
        className={`z-50 m-4 md:h-40 h-24 w-full`}
      />
    </div>
  );
};

export default LogoComponent;