"use client";
import React from "react";
import Link from "next/link";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
<<<<<<< HEAD
import { PrismicDocumentWithoutUID } from "@prismicio/client";
=======
import {
  ImageFieldImage,
  KeyTextField,
  LinkField,
  PrismicDocumentWithoutUID,
  RichTextField,
} from "@prismicio/client";
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
import { PrismicRichText } from "@prismicio/react";
import { FooterDocumentData, Simplify } from "../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

interface Props {
  footer: PrismicDocumentWithoutUID<Simplify<FooterDocumentData>>;
}

export default function Footer({ footer }: Props) {
  const { data } = footer;
  return (
    <footer className="w-full mt-10 bg-default-blue">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[30px] lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
          <div className="col-span-full align-center mb-10 lg:col-span-2 lg:mb-0">
<<<<<<< HEAD
            <PrismicNextLink field={data?.logoLink}>
              <PrismicNextImage alt="" field={data?.logoImage} />
            </PrismicNextLink>
            <div className="py-4 text-sm text-white lg:max-w-[266px] lg:max-h-[101px] text-center lg:text-left">
              <h4 className="font-raleway font-semibold text-xl">
                {data?.title}
              </h4>
              <p className="font-raleway font-normal text-base text-gray-300">
                <PrismicRichText field={data?.description} />
              </p>
              <p className="lg:max-w-[175px] lg:max-h-[44px] text-gray-400">
                <PrismicRichText field={data?.address} />
=======
            <PrismicNextLink field={data.logoLink}>
              <PrismicNextImage alt="" field={data.logoImage} />
            </PrismicNextLink>
            <div className="py-4 text-sm text-white lg:max-w-[266px] lg:max-h-[101px] text-center lg:text-left">
              <h4 className="font-raleway font-semibold text-xl">
                {data.title}
              </h4>
              <p className="font-raleway font-normal text-base text-gray-300">
                <PrismicRichText field={data.description} />
              </p>
              <p className="lg:max-w-[175px] lg:max-h-[44px] text-gray-400">
                <PrismicRichText field={data.address} />
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
              </p>
            </div>

            {/* Social  Icons*/}
            <div className="flex mt-4 py-8 space-x-4 justify-center lg:justify-start sm:mt-0 ">
<<<<<<< HEAD
              {data?.socialData?.map((item, index) => (
                <PrismicNextLink key={index} field={item?.socialLink}>
                  <PrismicNextImage alt="" field={item?.socialmage} />
=======
              {data.socialData.map((item, index) => (
                <PrismicNextLink key={index} field={item.socialLink}>
                  <PrismicNextImage alt="" field={item.socialmage} />
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
                </PrismicNextLink>
              ))}
            </div>
          </div>
<<<<<<< HEAD
          <SliceZone slices={footer?.data?.slices} components={components} />
=======
          <SliceZone slices={footer.data.slices} components={components} />
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
        </div>
      </div>
      <hr className="text-gray-400" />
      <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
        <p className=" text-gray-400 font-raleway text-sm md:text-[12px] font-normal">
<<<<<<< HEAD
          {data?.copyrightText}
=======
          {data.copyrightText}
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
        </p>
      </div>
    </footer>
  );
}
