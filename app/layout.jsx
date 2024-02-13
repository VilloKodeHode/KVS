import { Figtree } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/navigation/Footer";
import Header from "./components/navigation/Header";
import { ScrollToTopButton } from "./components/Buttons";

const figtree = Figtree({ subsets: ["latin"] });

export const PageLayout = ({ children }) => {
  return (
    <main className="page-padding grid overflow-x-hidden gap-32">
      {children}
    </main>
  );
};
export const metadata = {
  title: "KVS Trefelling - Kristensen Vedlikehold Service",
  description:
    "Spesialist på trefelling og vedlikeholdstjenester. Velg Kristensen Vedlikehold Service for pålitelige og profesjonelle treetjenester.",
  keywords:
    "trefelling, vedlikehold, Kristensen Vedlikehold Service, treetjenester, profesjonelle treetjenester",
  author: "Joakim Villo - Villo Utvikling",
  openGraph: {
    type: "website",
    url: "https://www.kvstrefelling.no/",
    title: "KVS Trefelling - Kristensen Vedlikehold Service",
    description:
      "Spesialister på trefelling og vedlikeholdstjenester. Velg Kristensen Vedlikehold Service for pålitelige og profesjonelle treetjenester.",
    image:
      "https://www.kvstrefelling.no/images/logo/KVS-full-logo-alternative.svg",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} overflow-x-hidden bg-gradient-to-b from-[#7fb1e0] to-[#34424e]`}
      >
        <Header />
        <PageLayout>{children}</PageLayout>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
