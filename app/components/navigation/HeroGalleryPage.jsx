import { HeroImage } from "../baseComponents/HeroImage"

export const HeroGalleryPage = ({imageSet, openImage, closeImage, selectedImage, page, imageOne, imageTwo}) => {
    return (
        <>
        {imageSet === page && (
            <>
              <div className="grid gap-2 grid-cols-2 h-full relative animate-appear justify-center items-center z-10">
                <HeroImage
                  openImage={openImage}
                  closeImage={closeImage}
                  selectedImage={selectedImage}
                  src={imageOne}
                  imagePosition="object-[0%_0%]"
                />
                <HeroImage
                  closeImage={closeImage}
                  selectedImage={selectedImage}
                  openImage={openImage}
                  src={imageTwo}
                  imagePosition="object-[50%_0%]"
                />
              </div>
            </>
          )}
          </>
    )
}
