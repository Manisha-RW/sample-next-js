/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param {FaqProps}
 */

import { KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

interface Props {
  slice: {
    primary: {
      faqs: Array<{
        heading: KeyTextField;
        description: RichTextField;
      }>;
      title1: KeyTextField;
      title2: KeyTextField;
      description: RichTextField;
    };
  };
}

export default function Faq({ slice }: Props) {
  return (
    <div className="lg:mt-20 vsm:mt-[50px]">
      <div className="mx-auto px-5 w-full max-w-screen-lg">
        <div className="flex flex-col items-center">
          <h3 className="mt-5 heading text-center text-3xl md:text-5xl  md:leading-[58px]">
          {slice.primary.title1}<span className="text-default-blue">{slice.primary.title2}</span>
          </h3>
          <p className="mt-3 font-Raleway text-base font-normal text-neutral-500 text-center">
          <PrismicRichText field={slice.primary.description} />
          </p>
        </div>
        {slice.primary.faqs.map((item, index) => (
          <div key={index} className="mx-auto mt-8 w-full">
            <div className="transition-all duration-200 bg-white shadow-kg cursor-pointer hover:bg-gray-50">
              <div className="mx-auto grid divide-y divide-neutral-200">
                <div className="py-5 w-full p-2 px-8">
                  <details className="group">+65
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span className="jakartaFontClass text-base font-semibold">
                      {item.heading}
                      </span>
                      <span className="transition font-semibold">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M12 5v14"></path>
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    <PrismicRichText field={item.description} />
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
