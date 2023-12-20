import Link from "next/link";
import Image from "next/image";
import { LOGO } from "../../data/menu_list";



const LogoComponent = ({ onclick }) => {

  return (
    <Link onClick={onclick} key="home" href="/" className="">
      <Image

        src="/images/logo/KVS-logo.png"
        width="200"
        height="200"
        alt="KVS-logo"
        className="z-20 h-24 w-full duration-200 lg:p-1 hover:scale-105"
      />
    </Link>
  
  );
};

export const SimpleLogoComponent = () => {

  return (
    <div>
      <Image
     src="/images/logo/KVS-logo.png"
       width="200"
       height="200"
       alt="KVS-logo"
        className="z-50 m-4"
      />
    </div>
  );
};

export default LogoComponent;
