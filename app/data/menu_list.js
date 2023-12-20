// This file contains the menu list for the navigation

export const MENU_LIST = [
  { text: "Hjem", href: "/" 
    , idRef:"hjem"},
  { text: "Om", href: "/om"
    , idRef:"om"},
  {
    text: "Tjenester",
    href: "/tjenester",
    idRef:"tjenester"
  },
  { text: "Kontakt", href: "/kontakt", idRef:"kontakt" },
];

export const LOGO = [
  {
    text: "Home",
    href: "/",
    imageSrc: "/logo/KVS-logo.png",
    imageWidth: 200,
    imageHeight: 200,
  },

];

export default MENU_LIST;
