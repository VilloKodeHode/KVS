"use client";
import { useEffect, useState } from "react";
import { scrollToSection } from "./navigation/scrollLogic";
import { FiArrowUpCircle } from "react-icons/fi";

export const ContactButton = () => {
  return (
    <button
      onClick={(event) => scrollToSection(event, "#kontakt")}
      className="text-3xl self-center text-white shadow shadow-black bg-KVS-primary w-fit py-4 px-8 rounded-full hover:scale-105 duration-100 active:scale-95"
    >
      Ta kontakt
    </button>
  );
};

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`z-50 p-1 hidden sm:block fixed bottom-4 right-4 transition-all duration-200 rounded-full hover:scale-125  ${
        isVisible ? "opacity-100" : "opacity-0 cursor-default user-select-none"
      }`}
    >
      <FiArrowUpCircle
        className={`w-12 h-12 rounded-full fill-KVS-primary text-KVS-secondary`}
        strokeWidth={1.5}
      />
    </button>
  );
}
