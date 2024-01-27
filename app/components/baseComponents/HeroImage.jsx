import Image from "next/image";
import { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export const HeroImage = ({
  src,
  imagePosition = "object-center",
  openImage,
  selectedImage,
  closeImage,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      <button className="-z-30" onClick={() => openImage(src)}>
        <figure className="h-full w-full ">
          <Image
            width={800}
            height={800}
            src={`/images/work/${src}.webp`}
            alt="KVS-logo"
            className={`rounded-xl opacity-75 h-full w-full md:object-[0%_20%] object-cover duration-200 hover:opacity-100 ${imagePosition}`}
          />
        </figure>
      </button>

      {src === selectedImage && (
        <div className="absolute-center ml:h-full h-[1000vh] w-screen ml:w-[100.2%] items-center rounded-xl bg-KVS-primary bg-opacity-40 z-10">
          <button
            className="w-full h-full flex justify-center"
            onClick={closeImage}
          >
            <figure className="ml:w-[66%] w-[95%] relative ml:h-auto lg:h-[120%] absolute-center z-50">
              <Image
                width={1200}
                height={1200}
                src={`/images/work/${src}.webp`}
                alt="KVS-logo"
                className={`z-50 rounded-3xl border-black w-full h-full object-cover duration-200 ${imagePosition}`}
                onLoad={() => setImageLoaded(true)}
              />
              {/* {!imageLoaded && (
                <Image
                  src="/images/logo/Logo.svg"
                  width="400"
                  height="400"
                  alt="KVS-logo"
                  className={`absolute-center z-50 m-4 h-full w-full`}
                />
              )} */}
            </figure>
          </button>
        </div>
      )}
    </>
  );
};