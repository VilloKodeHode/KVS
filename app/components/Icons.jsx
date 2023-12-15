import Image from "next/image";

export const ServiceIcon = ({ src }) => {
  return (
    <figure className="flex group items-center justify-center bg-KVS-secondary h-24 shadow shadow-black rounded-lg p-4 w-24">
      <Image
        width={100}
        height={100}
        src={`/images/service-icons/${src}.png`}
        alt={`${src}-icon`}
        className=" border-black lg:w-[50px] group-hover:scale-110 h-fit opacity-75 duration-200 group-hover:opacity-100 object-fit"
      />
    </figure>
  );
};

export const ContactIcon = ({ src, text }) => {
  return (
    <div className="flex items-center gap-4">
      <figure className="flex bg-KVS-green group rounded-full items-center justify-center h-24 w-24">
        <Image
          width={100}
          height={100}
          src={`/images/contact-icons/${src}.png`}
          alt={`${src}-icon`}
          className=" border-black group-hover:scale-110 h-fit w-fit duration-200 object-fit"
        />
      </figure>
      <p className="text-2xl">{text}</p>
    </div>
  );
};

