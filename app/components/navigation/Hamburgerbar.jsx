//TODO fiks overflow!

import MENU_LIST from "../../data/menu_list";
import NavItem from "./NavItem";
import LogoComponent from "../baseComponents/Logo";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { scrollToSection } from "./scrollLogic";

export default function HamburgerBar({
  currentPath,
  setIsOpen,
  isOpen,
  menuRef,
  handleMenuToggle,
}) {
  return (
    <>
      <div className="z-[99] flex items-center h-full rounded-bl-full md:hidden">
        <button
          className={`block ml-8 duration-200 hover:scale-110 text-KVS-secondary`}
          onClick={handleMenuToggle}
          aria-label="Åpne navigasjonsmeny"
        >
          <GiHamburgerMenu className={` h-10 w-10 `} />
        </button>
{/* //TODO overflow er sannsynligvis her: */}
{/* tidligere className:     

className={`absolute top-0 z-10 right-0 w-screen h-screen transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } `} 
          
          */}
        <div
 className={`absolute top-0 z-10 right-0 overflow-x-hidden w-screen h-screen transition-transform duration-300 ${
  isOpen ? "translate-y-0" : "-translate-y-[calc(100%+48px)]"
} `} 
          ref={menuRef}
        >
          <nav className={`relative z-10 flex justify-center h-screen `}>
            <div className={`relative flex justify-center`}></div>
            <div
              className={`z-50 w-full h-full bg-opacity-[0.99]
                bg-KVS-black
                  `}
            >
              <ul className={`mt-0 p-2`}>
                <div className="relative flex flex-col items-center justify-center w-full gap-8 pt-4">
                  <button
                    className="absolute flex items-center justify-center w-10 h-10 transition rounded-md top-4 right-4 "
                    onClick={handleMenuToggle}
                    aria-label="Lukke navigasjonsmeny"
                  >
                    <IoCloseSharp
                      className={` ${
                        isOpen ? "block" : "hidden"
                      } text-KVS-primary
                       hover:opacity-70 transition duration-500 z-50 w-10 h-10`}
                    />
                  </button>
                  <LogoComponent
                    handleMenuToggle={handleMenuToggle}
                    currentPath={currentPath}
                  />
                  {MENU_LIST.map((menu) => (
                    <NavItem
                    onClick={(event) => {
                      setIsOpen(false);
                      scrollToSection(event, menu.idRef, "top");
                    }}
                      textSize="text-h4"
                      key={menu.text}
                      text={menu.text}
                      idRef={menu.idRef}
                      currentPath={currentPath}
                    />
                  ))}
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
