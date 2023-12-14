import Image from "next/image";

export const ServiceIcon = ({ src }) => {
  return (
    <figure className="flex items-center justify-center bg-KVS-secondary h-24 rounded-lg p-4 w-24">
      <Image
        width={100}
        height={100}
        src={`/images/service-icons/${src}.png`}
        alt={` ${src}-icon`}
        className=" border-black lg:w-[50px] h-fit opacity-75 duration-200 hover:opacity-100 object-fit"
      />
    </figure>
  );
};
