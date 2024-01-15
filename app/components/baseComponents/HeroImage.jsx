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
        <div className="absolute-center h-[101%] w-[101%] items-center rounded-xl bg-KVS-primary bg-opacity-40 z-10">
          <button
            className="w-full h-full flex justify-center"
            onClick={closeImage}
          >
            <figure className="w-[66%] relative h-[105%] z-50">
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

export const HeroGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSet, setImageSet] = useState(1);
  const openImage = (src) => {
    setSelectedImage(src);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <div className="animate-slideInLeft relative min-h-[422px] z-10 max-w-3xl w-full">
      <div className="backdrop-blur-sm bg-KVS-primary bg-opacity-40 p-4 ml:p-8 z-10 rounded-3xl shadow shadow-KVS-primary">
        <button
          className={`absolute border-2 animate-appear rounded-xl ml:-bottom-12 -bottom-14 lg:bottom-1/2 right-1/3 lg:translate-y-1/2 lg:-right-10 ${
            selectedImage || imageSet === 4
              ? "bg-slate-500 border-slate-600"
              : "bg-KVS-primary border-KVS-secondary"
          }`}
          onClick={
            selectedImage || imageSet === 4
              ? null
              : () => setImageSet((prev) => prev + 1)
          }
        >
          <IoArrowForward
            className={`h-14 w-14 z-10  ${
              selectedImage ? "text-slate-600" : "text-KVS-secondary"
            }`}
          />
        </button>
        {imageSet === 1 && (
          <>
            <div className="grid gap-2 grid-cols-2 relative animate-appear justify-center items-center z-10">
              <HeroImage
                openImage={openImage}
                closeImage={closeImage}
                selectedImage={selectedImage}
                src="klatre-høyt"
                imagePosition="object-[0%_0%]"
              />
              <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="klatre-kuttet-topp"
                imagePosition="object-[50%_0%]"
              />
              {/* <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="klatre-med-kran"
                imagePosition="object-[50%_0%]"
              />
              <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="kuttet-ved"
                imagePosition="object-[50%_0%]"
              /> */}
            </div>
          </>
        )}
        {imageSet === 2 && (
          <>
            <div className="grid gap-2 grid-cols-2 relative animate-appear justify-center items-center z-10">
              <HeroImage
                openImage={openImage}
                closeImage={closeImage}
                selectedImage={selectedImage}
                src="motorsag-i-stubbe"
                imagePosition="object-[100%_0%]"
              />
              <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="kran-trimming"
                imagePosition="object-[50%_0%]"
              />
              {/* <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="klatre-henge"
                imagePosition="object-[25%_0%]"
              />
              <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="klatre-pose"
                imagePosition="object-[25%_0%]"
              /> */}
            </div>
          </>
        )}
        {imageSet === 3 && (
          <>
            <div className="grid gap-2 grid-cols-2 relative animate-appear justify-center items-center z-10">
              <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="klatre-henge"
                imagePosition="object-[25%_0%]"
              />
              <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="klatre-pose"
                imagePosition="object-[25%_0%]"
              />
            </div>
          </>
        )}
        {imageSet === 4 && (
          <>
            <div className="grid gap-2 grid-cols-2 relative animate-appear justify-center items-center z-10">
              <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="klatre-med-kran"
                imagePosition="object-[50%_0%]"
              />
              <HeroImage
                closeImage={closeImage}
                selectedImage={selectedImage}
                openImage={openImage}
                src="kuttet-ved"
                imagePosition="object-[50%_0%]"
              />
            </div>
          </>
        )}
        <button
          className={`absolute border-2 animate-appear rounded-xl ml:-bottom-12 -bottom-14 lg:bottom-1/2 left-1/3 lg:translate-y-1/2 lg:-left-10 ${
            selectedImage || imageSet === 1
              ? "bg-slate-500 border-slate-600"
              : "bg-KVS-primary border-KVS-secondary"
          }`}
          onClick={
            selectedImage || imageSet === 1
              ? null
              : () => setImageSet((prev) => prev - 1)
          }
        >
          <IoArrowBack
            className={`h-14 w-14 z-10  ${
              selectedImage ? "text-slate-600" : "text-KVS-secondary"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
