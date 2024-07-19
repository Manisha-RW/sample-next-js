import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.BrandsSlice} BrandsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BrandsSlice>} BrandsProps
 * @param {BrandsProps}
 */
interface Props {
  slice: {
    primary: {
      brandImages: Array<{
        Img: ImageFieldImage[];
      }>;
      title1: KeyTextField;
      title2: KeyTextField;
      description: RichTextField;
    };
  };
}

export default function Brands({ slice }: Props) {
  return (
    <div className="px-4 mx-[0.5rem] lg:mt-[120px] vsm:mt-[50px] m:mt-[50px] overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:gap-x-6 w-full max-w-[1300px] rounded-3xl bg-light-blue justify-center items-center p-6">
          {/* Left section */}
          <div className="lg:max-w-[418px] lg:max-h-[118px] mb-6 lg:mb-0">
            <h2 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
              {slice?.primary?.title1}{" "}
              <span className="text-default-blue font-raleway">
                {slice?.primary?.title2}
              </span>
            </h2>
            <p>
              <PrismicRichText field={slice?.primary?.description} />
            </p>
          </div>
          {/* Right section */}
          <div className="grid grid-cols-2 gap-5">
            {slice?.primary?.brandImages?.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-kg w-[180px] h-[80px] flex justify-center items-center"
              >
                <PrismicNextImage
                  className="max-w-[180px] max-h-[80px]"
                  alt=""
                  field={item?.Img as ImageFieldImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
