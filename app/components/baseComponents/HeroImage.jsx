import Image from "next/image";
import { useState } from "react";

export const HeroImage = ({
  src,
  imagePosition,
  openImage,
  selectedImage,
  closeImage,
}) => {
  return (
    <>
        <button className="-z-50 " onClick={() => openImage(src)}>
          <figure className=" md:h-[300px] w-full">
   
            <Image
              width={800}
              height={800}
              src={`/images/work/${src}.webp`}
              alt="KVS-logo"
              className={`rounded-xl border-black w-full h-full opacity-75 object-[0%_20%] duration-200 object-cover hover:opacity-100 ${imagePosition}`}
            />
         
          </figure>
        </button>

      {src === selectedImage && (
        <div className="absolute-center h-full w-full items-center rounded-3xl bg-KVS-primary bg-opacity-40 flex justify-center">
          <figure className="w-2/3 h-[110%] z-50">
            <button className="w-full h-full" onClick={closeImage}>
              <Image
                width={1200}
                height={1200}
                src={`/images/work/${src}.webp`}
                alt="KVS-logo"
                className={`z-50 rounded-3xl border-black w-full h-full object-cover object-[0%_20%] duration-200 ${imagePosition}`}
              />
            </button>
          </figure>
        </div>
      )}
    </>
  );
};

export const HeroGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (src) => {
    setSelectedImage(src);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <div className="animate-slideInLeft z-10 max-w-3xl  w-full">
      <div className="grid gap-2 relative bg-KVS-primary grid-cols-2 grid-rows-2 bg-opacity-40 p-4 ml:p-8 z-10 rounded-3xl shadow shadow-black justify-center items-center">
        <HeroImage
          openImage={openImage}
          closeImage={closeImage}
          selectedImage={selectedImage}
          src="kaltre-høyt"
          imagePosition="object-[0%_20%]"
        />
        <HeroImage
          closeImage={closeImage}
          selectedImage={selectedImage}
          openImage={openImage}
          src="klatre-kuttet-topp"
          imagePosition="object-[0%_20%]"
        />
        <HeroImage
          closeImage={closeImage}
          selectedImage={selectedImage}
          openImage={openImage}
          src="klatre-med-kran"
          imagePosition="object-[0%_20%]"
        />
        <HeroImage
          closeImage={closeImage}
          selectedImage={selectedImage}
          openImage={openImage}
          src="kuttet-ved"
          imagePosition=""
        />
      </div>
    </div>
  );
};
