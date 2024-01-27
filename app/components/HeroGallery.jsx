import Image from "next/image";
import { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { HeroImage } from "./baseComponents/HeroImage";
import { HeroGalleryPage } from "./navigation/HeroGalleryPage";

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
      <div className="animate-slideInLeft relative z-10 max-w-3xl w-full">
        <div className="backdrop-blur-sm bg-KVS-primary bg-opacity-40 xxl:min-h-[528px] md:min-h-[400px] p-4 ml:p-8 z-10 rounded-3xl shadow shadow-KVS-primary">
          <button
            className={`absolute border-2 animate-appear rounded-xl ml:-bottom-12 -bottom-14 lg:bottom-1/2 right-1/4 lg:translate-y-1/2 lg:-right-10 ${
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
          <button
            className={`absolute border-2 animate-appear rounded-xl ml:-bottom-12 -bottom-14  lg:bottom-1/2 left-1/4 lg:translate-y-1/2 lg:-left-10  ${
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
          {/*TODO Fullfør å legge inn komponenten som er laget under på de andre bildene. Finn ut hvordan å slippe å skrive inn alle proppsa her.... */}
          <HeroGalleryPage imageSet={imageSet} openImage={openImage} selectedImage={selectedImage} closeImage={closeImage} page={1} imageOne="klatre-høyt" imageTwo="klatre-kuttet-topp" />
          {/* {imageSet === 1 && (
            <>
              <div className="grid gap-2 grid-cols-2 h-full relative animate-appear justify-center items-center z-10">
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
              </div>
            </>
          )} */}
          {imageSet === 2 && (
            <>
              <div className="grid gap-2 grid-cols-2 h-full relative animate-appear justify-center items-center z-10">
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
              </div>
            </>
          )}
          {imageSet === 3 && (
            <>
              <div className="grid gap-2 grid-cols-2 h-full relative animate-appear justify-center items-center z-10">
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
              <div className="grid gap-2 grid-cols-2 h-full relative animate-appear justify-center items-center z-10">
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
 
        </div>
      </div>
    );
  };