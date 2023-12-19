import Image from "next/image";
import Link from "next/link";


const NavItem = ({
  text,
  href,
  onClick,
  className,
  textSize,
  currentPath,
}) => {
  return (
    <div key={text} className={`relative group z-10 ${className}`}>
      <Link href={href} className="">
        <p
          className={`${textSize}text-Villo-dark-white z-10`}
          onClick={onClick}
        >
          {text}
        </p>
        <div
          className={`${currentPath === href ? `h-2` : "group-hover:h-2"
            } absolute w-full h-0 transition-all bg-Villo-dark-primary
            `}
        />
      </Link>
      {(currentPath === href) && (
        <div className="absolute top-0 w-3 h-full -left-4">
          <Image
            src={"/service-icons/KVS-icon.svg"}
            className="w-auto h-full animate-Appear"
            fill="responsive"
            alt="KVS-logo figure"
          />
        </div>
      )}
    </div>
  );
};

export default NavItem;
