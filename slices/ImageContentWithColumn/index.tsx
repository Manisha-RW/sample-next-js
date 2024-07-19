/**
 * @typedef {import("@prismicio/client").Content.ImageContentWithColumnSlice} ImageContentWithColumnSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageContentWithColumnSlice>} ImageContentWithColumnProps
 * @param {ImageContentWithColumnProps}
 */

import React from "react";
import { RichTextField } from "@prismicio/client";
import { KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { ImageFieldImage } from "@prismicio/client";

interface Props {
  slice: {
    primary: {
      image: ImageFieldImage[];
      title1: KeyTextField;
      title2: KeyTextField;
      description1: RichTextField;
      description2: RichTextField;
    };
    variation: string;
  };
}

export default function ImageContentWithColumn({ slice }: Props) {
  return (
    <>
      {slice?.variation == "default" && (
        <div className="mt-20 lg:mt-40 overflow-hidden">
          <div className="mx-auto lg:px-4">
            <div className="flex flex-col mx-8 lg:flex-row md:flex-col sm:flex-col justify-center gap-10 lg:gap-20 lg:items-center">
              <div className="w-full lg:w-[590px] h-auto lg:h-[563px] relative">
                <PrismicNextImage
                  alt=""
                  field={slice?.primary?.image as ImageFieldImage}
                />
              </div>
              <div className="text w-full lg:w-[572px]">
                <h2 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
                  <>{slice?.primary?.title1}</>
                  <span className="text-default-blue font-raleway">
                    {" "}
                    <>{slice?.primary?.title2}</>
                  </span>
                </h2>
                <div className="leading-6 font-Raleway">
                  <p className="mb-6 md:mb-12 text-sm lg:text-base">
                    <PrismicRichText field={slice?.primary?.description1} />
                  </p>
                  <p className="text-sm lg:text-base">
                    <PrismicRichText field={slice?.primary?.description2} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {slice?.variation == "imageAtRightSide" && (
        <section className="bg-gray-100" id="aboutus">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <h3 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6 text-center">
                  <>{slice?.primary?.title1}</>
                  <span className="text-default-blue font-raleway">
                    {" "}
                    <>{slice?.primary?.title2}</>
                  </span>
                </h3>
                <p className="mt-4 text-gray-600 text-[18px]">
                  <PrismicRichText field={slice?.primary?.description1} />
                </p>
              </div>
              <div className="mt-12 md:mt-0">
                <PrismicNextImage
                  alt=""
                  className="object-cover rounded-lg shadow-md"
                  field={slice?.primary?.image as ImageFieldImage}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
