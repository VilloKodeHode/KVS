import Image from "next/image";
import Link from "next/link";

const NavItem = ({
  text,
  onClick,
  className,
  textSize,
  idRef,
}) => {
  return (
    <button key={text} className={`relative group z-10`}>
      <a
        href={`${idRef}`}
        className={`${textSize} text-KVS-white z-10`}
        onClick={onClick}
      >
        {text}
      </a>
      <div
        className={`group-hover:h-2
          absolute w-full h-0 transition-all bg-KVS-secondary`}
      />
      <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute top-0 w-3 h-full -left-4">
        <Image
          src={"/images/service-icons/KVS-icon.svg"}
          className="w-auto h-full"
          fill="responsive"
          alt="KVS-logo figure"
        />
      </div>
    </button>
  );
};

export default NavItem;
