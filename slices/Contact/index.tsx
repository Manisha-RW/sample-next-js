/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param {ContactProps}
 */
import { ImageFieldImage } from "@prismicio/client";
import { KeyTextField } from "@prismicio/client";
import { RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

// interface Props {
//   slice: {
//     primary: {
//       image: ImageFieldImage[];
//       title1: KeyTextField;
//       title2: KeyTextField;
//       description: RichTextField;
//     };
//   };
// }

export default function Contact({ slice }) {
  return (
    <div className="mt-[120px] vsm:mt-[50px]">
      <section className="pb-10">
        <div className="container lg:max-w-[1140px] lg:max-h-[589px] px-5 mx-auto flex flex-col lg:flex-row sm:flex-nowrap flex-wrap">
          {/* Left Picture */}
          <div className="lg:max-w-[589px] lg:max-h-[589px] w-full lg:w-auto">
            <PrismicNextImage
              className="rounded-lg w-full lg:w-[570px] lg:h-[570px] md:w-[740px] md:h-[300px] vsm:w-[400px] vsm:h-[250px] mx-auto"
              alt=""
              field={slice.primary.image as ImageFieldImage}
            />
          </div>
          {/* Right Form */}
          <div className="lg:w-[493px] lg:h-[516px] bg-white flex flex-col md:ml-auto w-full md:pt-8 mt-8 md:mt-0">
            <h3 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
              {slice.primary.title1}{" "}
              <span className="text-default-blue font-raleway">
                {slice.primary.title2}
              </span>
            </h3>
            <p className="leading-relaxed font-Raleway text-base font-normal mb-5 text-gray-600">
              <PrismicRichText field={slice.primary.description} />
            </p>

            <div className="flex mb-4 gap-5">
              <div className="relative mb-4 w-full lg:w-1/2">
                <label htmlFor="name" className="leading-7 text-sm ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full shadow-kg bg-white rounded border border-gray-100 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm ">
                  Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full shadow-kg lg:max-w-[241px] lg:max-h-[52px] bg-white rounded border border-gray-100 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email Address*
                </label>
                <input
                  className="appearance-none shadow-kg block w-full  text-gray-700 border border-gray-100 focus:ring-2 focus:ring-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Any Questions?
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full lg:w-[492px] shadow-kg lg:h-[72px] bg-white rounded border border-gray-100 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="w-full lg:w-[492px] text-white bg-default-blue font-semibold font-raleway text-base border-0 py-2 px-6 focus:outline-none rounded">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
