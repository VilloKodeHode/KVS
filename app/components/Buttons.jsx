import { scrollToSection } from "./navigation/scrollLogic";

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
