import Link from "next/link";
import Image from "next/image";
import { LOGO } from "../../data/menu_list";



const LogoComponent = ({ onclick }) => {

  return (
    <Link onClick={onclick} key={LOGO.text} href={LOGO.href} className="">
      <Image

        src={LOGO.imageSrc}
        width={LOGO.imageWidth}
        height={LOGO.imageHeight}
        alt="KVS-logo"
        className="z-20 h-full duration-200 lg:p-1 hover:scale-105"
      />
    </Link>
  );
};

export const SimpleLogoComponent = () => {

  return (
    <div>
      <Image
        src={LOGO.imageSrc}
        width={LOGO.imageWidth}
        height={LOGO.imageHeight}
        alt="KVS-logo"
        className="z-50 m-4"
      />
    </div>
  );
};

export default LogoComponent;
