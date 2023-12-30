"use client";

//Header component
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import MENU_LIST from "../../data/menu_list";
import LogoComponent from "../baseComponents/Logo";
import {SiInstagram } from "react-icons/si";
import HamburgerBar from "./Hamburgerbar";
import { FaArrowRight } from "react-icons/fa";

export default function Header({ currentPath }) {
  const [notTop, setNotTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setNotTop(window.scrollY > 0);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
      id="#hjem"
        className={`relative bg-KVS-black transition-colors bg-opacity-[0.93] duration-1000 z-40 h-12 gap-4 flex items-center justify-end px-12 py-2 text-KVS-white
        `}
      >
        <div className="flex items-center gap-2">
<p className="text-xs">sjekk ut tidligere utførte oppdrag 
</p>
<FaArrowRight className="animate-pulse" />
</div>
        <a
          href="https://www.instagram.com/kvstrefelling/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
          target="_blank"
          className={`grid transition-all z-40 grid-flow-col gap-12 ${
            notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"
          }`}
        >
          <SiInstagram
            className={`z-10 w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
          />
        </a>
      </div>

      <header
        className={`relative  bg-KVS-primary transition-all duration-1000 z-50 bg-opacity-[0.925] flex flex-col w-full justify-center px-4 mx-auto sm:px-6 lg:px-12`}
      >
        <div className="z-50 flex items-center justify-between">
          <div className="grid items-center h-[112px] min-w-[200px] gap-8">
            <div className="relative  z-40 flex flex-row items-center w-fit">
              <LogoComponent
                onClick={() => {
                  handleMenuToggle();
                }}
                currentPath={currentPath}
              />
            </div>
          </div>
          <Navbar currentPath={currentPath} MENU_LIST={MENU_LIST} />

          <HamburgerBar
            handleMenuToggle={handleMenuToggle}
            menuRef={menuRef}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            currentPath={currentPath}
            MENU_LIST={MENU_LIST}
          />
        </div>
      </header>
    </>
  );
}
