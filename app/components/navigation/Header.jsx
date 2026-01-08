"use client";

//Header component
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import MENU_LIST from "../../data/menu_list";
import LogoComponent from "../baseComponents/Logo";
import { SiInstagram } from "react-icons/si";
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
      {/* <div
        id="#hjem"
        className={`relative bg-KVS-black transition-colors bg-opacity-[0.93] duration-1000 z-40 h-12 gap-4 flex items-center justify-end px-12 py-2 
        `}
      ></div> */}

      <header
        id="#hjem"
        className={`relative bg-KVS-primary transition-all duration-1000 z-50 bg-opacity-[0.925] flex flex-col w-full justify-center px-2 mm:px-4 mx-auto sm:px-6 lg:px-12`}>
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
          <Navbar
            currentPath={currentPath}
            MENU_LIST={MENU_LIST}
          />

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
      <div className="flex justify-end text-KVS-white">
        <a
          href="https://www.instagram.com/kvstrefelling/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
          target="_blank"
          className={`glass-card fixed top-28 right-4 z-50 flex items-center gap-3 px-6 py-3 text-KVS-white hover:text-KVS-secondary transition-all duration-300 transform hover:scale-105 ${
            notTop
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0 pointer-events-none"
          }`}>
          <span className="text-sm font-semibold hidden md:block">
            Sjekk ut tidligere oppdrag
          </span>
          <span className="text-sm font-semibold md:hidden">Instagram</span>
          <FaArrowRight className="animate-pulse text-KVS-secondary" />
          <SiInstagram className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}
