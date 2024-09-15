import Image from "next/image";

export const InstagramGallery = async ({ instaImages }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-12 w-full py-16 mb-36 relative">
      <div className="absolute-center w-screen shadow-KVS-primary shadow bg-KVS-primary bg-opacity-40 h-full" />
      <h1 className="section-header text-KVS-white">Galleri</h1>
      <div className="w-full gap-4 min-h-screen justify-center items-center flex flex-wrap">
        {instaImages.data.map((image) => (
          <div className="h-[400px] rounded-xl hover:outline hover:outline-2 hover:outline-KVS-secondary group overflow-hidden relative w-[300px]" key={image.id}>
      
            <div className="w-full h-[300px]">
            {image.media_type === "VIDEO" ? (
              <video
              controls
                muted
                className="w-full h-full -z-10 object-cover"
                src={image.media_url}
                alt={image.caption}
              />
            ) : (
              <Image
              width={300}
              height={300}
                className="w-full h-full object-cover"
                src={image.media_url}
                alt={image.caption}
              />
            )}
            </div>
            <div className="bg-KVS-black h-[100px] relative p-2">
              <p className="text-KVS-white text-xs">{image.caption}</p>
              <a target="_blank" href={image.permalink} className="z-20">
              <Image src="/images/contact-icons/instagram.png" width={30} height={30} alt="Instagram logo" className="absolute bottom-2 right-2 hover:scale-110 transition duration-300"  />
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
