import MENU_LIST from "../../data/menu_list";
import { useState } from "react";
import NavItem from "./NavItem";
import { IoCloseSharp } from "react-icons/io5";
import { scrollToSection } from "./scrollLogic";

export default function Navbar({
  className,
  currentPath,
}) {

  return (
    <div className={`flex w-full items-center justify-start ${className}`}>
      <div className="flex-row hidden justify-end h-[112px] items-center rounded-bl-full gap-8 w-full md:flex">

        {MENU_LIST.map((menu) => (

          <NavItem
          onClick={(event) => scrollToSection(event, menu.idRef)}
            textSize="text-p"
            key={menu.text}
            text={menu.text}
            idRef={menu.idRef}
            currentPath={currentPath}
          />
        ))}
      </div>

    </div>
  );
}
