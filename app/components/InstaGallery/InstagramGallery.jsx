import Image from "next/image";

export const InstagramGallery = async ({ latestVideo, firstFourImages }) => {
  // const latestVideo = instaImages.data.find(
  //   (image) => image.media_type === "VIDEO"
  // );
  // const allImages = instaImages.data.filter(
  //   (image) => image.media_type !== "VIDEO"
  // );
  // const firstThreeImages = allImages.slice(0, 3);

  return (
    <section className="flex flex-col justify-center items-center gap-12 w-full py-16 relative">
      <div className="absolute-center w-screen shadow-KVS-primary shadow bg-KVS-primary bg-opacity-40 h-full" />
      <h1 className="section-header text-KVS-white">Galleri</h1>
      <div className="w-full gap-4 min-h-screen justify-center items-center flex flex-wrap">
        <div className="h-[400px] rounded-xl hover:outline-2 hover:outline-KVS-secondary group overflow-hidden relative w-[300px]">
          <div className="w-full h-[300px]">
            <video
              controls
              muted
              className="w-full h-full -z-10 object-cover"
              src={latestVideo.media_url}
              alt={latestVideo.caption}
            />
          </div>
          <div className="bg-KVS-black h-[100px] relative p-2">
            <p className="text-KVS-white text-xs">{latestVideo.caption}</p>
            <a
              target="_blank"
              href={latestVideo.permalink}
              className="z-20">
              <Image
                src="/images/contact-icons/instagram.png"
                width={30}
                height={30}
                alt="Instagram logo"
                className="absolute bottom-2 right-2 hover:scale-110 transition duration-300"
              />
            </a>
          </div>
        </div>

        {firstFourImages.map((image) => (
          <div
            className="h-[400px] rounded-xl hover:outline-2 hover:outline-KVS-secondary group overflow-hidden relative w-[300px]"
            key={image.id}>
            <div className="w-full h-[300px]">
              <img
                className="w-full h-full object-cover"
                src={image.media_url}
                alt={image.caption}
              />
            </div>
            <div className="bg-KVS-black h-[100px] relative p-2">
              <p className="text-KVS-white text-xs">{image.caption}</p>
              <a
                target="_blank"
                href={image.permalink}
                className="z-20">
                <Image
                  src="/images/contact-icons/instagram.png"
                  width={30}
                  height={30}
                  alt="Instagram logo"
                  className="absolute bottom-2 right-2 hover:scale-110 transition duration-300"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// export const InstagramGallery = async ({ instaImages }) => {
//   const latestVideo = instaImages.data.find((image) => image.media_type === "VIDEO");
//   console.log(latestVideo)
//   return (
//     <section className="flex flex-col justify-center items-center gap-12 w-full py-16 mb-36 relative">
//       <div className="absolute-center w-screen shadow-KVS-primary shadow bg-KVS-primary bg-opacity-40 h-full" />
//       <h1 className="section-header text-KVS-white">Galleri</h1>
//       <div className="w-full gap-4 min-h-screen justify-center items-center flex flex-wrap">
//         {instaImages.data.map((image) => (
//           <div className="h-[400px] rounded-xl hover:outline hover:outline-2 hover:outline-KVS-secondary group overflow-hidden relative w-[300px]" key={image.id}>

//             <div className="w-full h-[300px]">
//             {image.media_type === "VIDEO" ? (
//               <video
//               controls
//                 muted
//                 className="w-full h-full -z-10 object-cover"
//                 src={image.media_url}
//                 alt={image.caption}
//               />
//             ) : (
//               <img
//                 className="w-full h-full object-cover"
//                 src={image.media_url}
//                 alt={image.caption}
//               />
//             )}
//             </div>
//             <div className="bg-KVS-black h-[100px] relative p-2">
//               <p className="text-KVS-white text-xs">{image.caption}</p>
//               <a target="_blank" href={image.permalink} className="z-20">
//               <Image src="/images/contact-icons/instagram.png" width={30} height={30} alt="Instagram logo" className="absolute bottom-2 right-2 hover:scale-110 transition duration-300"  />
//             </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
