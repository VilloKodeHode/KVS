import Image from "next/image";

export const Header = () => {
  return (
    <header className="z-20 h-20 flex items-center justify-between my-8 page-padding">
      <figure>
        <Image
          width={200}
          height={200}
          src="/images/logo/KVS-logo.png"
          alt="logo"
          className="h-20 w-full z-10 rounded-md"
        />
      </figure>

      <nav>
        <ul className="hidden  gap-4 md:flex font-bold text-white">
          <li className="hover:scale-110 duration-100 cursor-pointer active:scale-95">
            Home
          </li>
          <li className="hover:scale-110 duration-100 cursor-pointer active:scale-95">
            About
          </li>
          <li className="hover:scale-110 duration-100 cursor-pointer active:scale-95">
            Contact
          </li>
        </ul>
        {/* hamburgerbar: */}
        <div className="md:hidden">
          <button className="hover:scale-110 duration-100 active:scale-95">
            <img src="/images/navigation/hamburgerBar.svg" alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
};
