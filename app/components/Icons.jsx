import Image from "next/image";
import React from "react";

export const ServiceLocalIcon = ({ src, text, label, title }) => {
  return (
    <div className="flex flex-col items-center gap-4 relative p-4 rounded-2xl">
      <figure className="flex group items-center justify-center h-24 shadow rounded-full border-2 border-KVS-secondary p-4 w-24">
        <Image
          width={50}
          height={50}
          src={`/images/service-icons/${src}`}
          alt={`${src}-icon`}
          className="group-hover:scale-110 opacity-75 duration-200 group-hover:opacity-100 object-fit"
        />
      </figure>
      <article className=" text-KVS-white grid gap-2 text-center max-w-[240px]">
        <h4 className="text-2xl underline underline-offset-[6px]">{title}</h4>
        <div className="flex flex-col items-center gap-2">
          <p>{text}</p>
          <p className="bg-KVS-primary rounded-2xl px-4 py-2 w-fit text-KVS-secondary">
            {label}
          </p>
        </div>
      </article>
    </div>
  );
};

export const ServiceReactIcon = ({ children, text, label, title }) => {
  //TODO Legg til animasjon her: Sirkel som går innover til den blir borte ved hover
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl p-4">
      <figure className="flex group items-center justify-center h-24 shadow rounded-full border-2 border-KVS-secondary p-4 w-24">
        {React.cloneElement(children, {
          className:
            "group-hover:scale-110 fill-KVS-secondary h-full w-full opacity-75 duration-200 group-hover:opacity-100 object-fit",
        })}
      </figure>
      <article className="text-KVS-white grid gap-2 h-full text-center max-w-[240px]">
        <h4 className="text-2xl underline underline-offset-[6px]">{title}</h4>
        <div className="flex flex-col items-center justify-between h-full gap-2">
          <p>{text}</p>
          {label && (
            <p className="bg-KVS-primary rounded-2xl px-4 py-2 w-fit text-KVS-secondary">
              {label}
            </p>
          )}
        </div>
      </article>
    </div>
  );
};

export const ContactIcon = ({ children, text }) => {
  //TODO Legg til animasjon her: Sirkel som går innover til den blir borte ved hover
  return (
    <div className="flex items-center gap-4">
      <figure className="flex group rounded-full items-center justify-center py-2 w-16 lg:w-24">
        {React.cloneElement(children, {
          className:
            "text-KVS-secondary group-hover:scale-110 h-8 w-8 duration-200 object-fit",
        })}
      </figure>
      <p className="md:text-xl text-md text-KVS-white">{text}</p>
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