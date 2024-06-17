// import React from "react";

// const About = ({ props }) => {
//   return (
//     <div className="mt-20 lg:mt-40 overflow-hidden">
//       <div className="container mx-auto px-4">
//         {props?.map((about, index) => (
//           <div
//             key={index}
//             className="flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center gap-10 lg:gap-20 lg:items-center"
//           >
//             <div className="w-full lg:w-[590px] h-auto lg:h-[563px] relative">
//               <img
//                 src={about?.image}
//                 className="rounded-lg w-full h-auto lg:max-w-full"
//                 alt="About us"
//               />
//             </div>
//             <div className="text w-full lg:w-[572px]">
//               <h2 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
//                 {about?.title1}
//                 <span className="text-default-blue font-raleway"> {about?.title2}</span>
//               </h2>
//               <div className="leading-6 font-Raleway">
//                 <p className="mb-6 md:mb-12 text-sm lg:text-base">
//                   {about?.description1}
//                 </p>
//                 <p className="text-sm lg:text-base">{about?.description2}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;
