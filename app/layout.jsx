"use client"

import { Figtree } from "next/font/google";
import "./globals.css";

import { Footer } from "./components/Footer";
import Header from "./components/navigation/Header";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";


const figtree = Figtree({ subsets: ["latin"] });

export const Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const PageLayout = ({ children }) => {
  return <main className="page-padding grid gap-32">{children}</main>;
};

export default function RootLayout({ children }) {
//   const router = useRouter();
// const currentPath = router.asPath;

// useEffect(() => {
//   console.log(currentPath)
// }, [currentPath]);

  return (
    <html lang="en">
      <body
        className={`${figtree.className} overflow-x-hidden bg-KVS-primary bg-opacity-75`}
      >
        <Header 
        // currentPath={currentPath} 
        />
        <PageLayout>{children}</PageLayout>
        <Footer />
      </body>
    </html>
  );
}
