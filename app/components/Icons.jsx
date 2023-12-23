import Image from "next/image";
import React from "react";

export const ServiceLocalIcon = ({ src, text, title }) => {
  return (
    <div className="flex flex-col items-center gap-4">
    <figure className="flex group items-center justify-center bg-KVS-secondary h-24 shadow shadow-black rounded-lg p-4 w-24">
      <Image
        width={50}
        height={50}
        src={`/images/service-icons/${src}`}
        alt={`${src}-icon`}
        className=" border-black group-hover:scale-110 opacity-75 duration-200 group-hover:opacity-100 object-fit"
      />
        
    </figure>
    <article className=" text-KVS-white grid gap-2 text-center max-w-[240px]">
    <h4 className="text-2xl underline underline-offset-[6px]">{title}</h4>
    <p>{text}</p>
    </article>
    </div>
  );
};


export const ServiceReactIcon = ({children, text, title }) => {
  //TODO Legg til animasjon her: Sirkel som går innover til den blir borte ved hover
  return (
    <div className="flex flex-col items-center gap-4">
    <figure className="flex group items-center justify-center bg-KVS-secondary h-24 shadow shadow-black rounded-lg p-4 w-24">
              {React.cloneElement(children,{className:"border-black lg:w-[50px] group-hover:scale-110 h-[50px] w-[50px] opacity-75 duration-200 group-hover:opacity-100 object-fit"})}
    </figure>
    <article className="text-KVS-white grid gap-2 text-center max-w-[240px]">
    <h4 className="text-2xl underline underline-offset-[6px]">{title}</h4>
    <p>{text}</p>
    </article>
    </div>
  );
};


export const ContactIcon = ({ children, text }) => {
    //TODO Legg til animasjon her: Sirkel som går innover til den blir borte ved hover
  return (
    <div className="flex items-center gap-4">
      <figure className="flex group rounded-full items-center justify-center lg:h-24 h-16 w-16 lg:w-24">
      {React.cloneElement(children,{className:"text-KVS-secondary group-hover:scale-110 h-12 w-12 duration-200 object-fit"})}
      </figure>
      <p className="text-2xl text-KVS-white">{text}</p>
    </div>
  );
};

export const OldContactIcon = ({ src, text }) => {
  return (
    <div className="flex items-center gap-4">
      <figure className="flex bg-KVS-green group rounded-full items-center justify-center p-4 lg:h-24 h-16 w-16 lg:w-24">
        <Image
          width={100}
          height={100}
          src={`/images/contact-icons/${src}.png`}
          alt={`${src}-icon`}
          className=" group-hover:scale-110 h-fit w-fit duration-200 object-fit"
        />
      </figure>
      <p className="text-2xl">{text}</p>
    </div>
  );
};