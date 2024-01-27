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
          <HeroGalleryPage  imageSet={imageSet} openImage={openImage} selectedImage={selectedImage} closeImage={closeImage} page={1} imageOne="klatre-høyt" imageTwo="klatre-kuttet-topp" />

          <HeroGalleryPage imageSet={imageSet} openImage={openImage} selectedImage={selectedImage} closeImage={closeImage} page={2} imageOne="motorsag-i-stubbe" imageTwo="kran-trimming" />

          <HeroGalleryPage imageSet={imageSet} openImage={openImage} selectedImage={selectedImage} closeImage={closeImage} page={3} imageOne="klatre-henge" imageTwo="klatre-pose" />

          <HeroGalleryPage imageSet={imageSet} openImage={openImage} selectedImage={selectedImage} closeImage={closeImage} page={4} imageOne="klatre-med-kran" imageTwo="kuttet-ved" />
 
        </div>
      </div>
    );
  };