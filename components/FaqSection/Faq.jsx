// import React from "react";
// const jakartaFontClass = "font-plus-jakarta-sans";
// const Faq = ({props}) => {
//   return (
//     <div className="lg:mt-20 vsm:mt-[50px]">
//       <div className="mx-auto px-5 w-full max-w-screen-lg">
//         <div className="flex flex-col items-center">
//           <h3 className="mt-5 heading text-center text-3xl md:text-5xl  md:leading-[58px]">
//             {props?.title1}<span className="text-default-blue">{props?.title2}</span>
//           </h3>
//           <p className="mt-3 font-Raleway text-base font-normal text-neutral-500 text-center">
//             {props?.description}
//           </p>
//         </div>
//         {props?.faqData?.map((faq, index) => (
//           <div key={index} className="mx-auto mt-8 w-full">
//             <div className="transition-all duration-200 bg-white shadow-kg cursor-pointer hover:bg-gray-50">
//               <div className="mx-auto grid divide-y divide-neutral-200">
//                 <div className="py-5 w-full p-2 px-8">
//                   <details className="group">+65
//                     <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//                       <span className="jakartaFontClass text-base font-semibold">
//                         {faq?.heading}
//                       </span>
//                       <span className="transition font-semibold">
//                         <svg
//                           fill="none"
//                           height="24"
//                           shape-rendering="geometricPrecision"
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="1.5"
//                           viewBox="0 0 24 24"
//                           width="24"
//                         >
//                           <path d="M12 5v14"></path>
//                           <path d="M5 12h14"></path>
//                         </svg>
//                       </span>
//                     </summary>
//                     <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
//                       {faq?.description}
//                     </p>
//                   </details>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Faq;