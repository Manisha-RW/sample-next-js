// /**
//  * @typedef {import("@prismicio/client").Content.ClientsSlice} ClientsSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<ClientsSlice>} ClientsProps
//  * @param {ClientsProps}
//  */
// "use client";
// import { ImageFieldImage } from "@prismicio/client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { PrismicNextImage } from "@prismicio/next";
// import { PrismicRichText } from "@prismicio/react";

// export default function Clients({ slice }) {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="mt-28 vsm:mt-[50px] flex flex-col items-center overflow-hidden">
//       <h2 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
//         {slice?.primary?.title1}
//         <span className="text-default-blue font-raleway">
//           {slice?.primary?.title2}
//         </span>
//         {slice?.primary?.title3}
//       </h2>

//       <div className="client-slider-container shadow-kg w-full max-w-4xl">
//         <Slider {...settings} className="slick-slider">
//           {slice?.primary?.clientData?.map((item, index) => (
//             <div key={index} className="flex justify-center">
//               <div className="w-full max-w-4xl h-auto md:h-[471px] rounded-lg p-8 text-center flex flex-col items-center">
//                 <PrismicNextImage
//                   alt={item?.image?.alt}
//                   className="h-24 w-24 md:h-[102px] md:w-[102px] rounded-full"
//                   field={item?.image as ImageFieldImage}
//                 />
//                 <p className="font-semibold text-xl md:text-2xl font-raleway text-project-blue mt-4">
//                   {item?.name}
//                 </p>
//                 <p className="font-normal text-gray-600 mt-4 dark:text-white">
//                   {item?.position}
//                 </p>
//                 <div className="flex items-center justify-center space-x-2 mt-4">
//                   {Array.from({ length: 4 }).map((_, index) => (
//                     <svg
//                       key={index}
//                       className="text-yellow-500 w-4 h-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       stroke="currentColor"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                   ))}
//                 </div>
//                 <div className="flex justify-center mt-4">
//                   <div className="flex w-full max-w-3xl">
//                     <img
//                       className="w-9 h-10 mx-auto text-gray-400"
//                       src="/images/Inverted-comma.png"
//                       alt="Inverted comma"
//                     />
//                     <p className="w-full font-normal text-base text-gray-600 dark:text-white">
//                       <PrismicRichText field={item?.description} />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }
