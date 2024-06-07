/**
 * @typedef {import("@prismicio/client").Content.ProjectSlice} ProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectSlice>} ProjectProps
 * @param {ProjectProps}
 */

"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

interface Props {
  slice: {
    primary: {
      title1: KeyTextField;
      title2: KeyTextField;
      description: RichTextField;
      cardData: Array<{
        cardImage: ImageFieldImage[];
        heading: KeyTextField;
        description: RichTextField;
        clientLabel: KeyTextField;
        clientName: KeyTextField;
      }>;
      iconImages: Array<{
        title: KeyTextField;
        iconImg: ImageFieldImage[];
      }>;
    };
  };
}

export default function Project({ slice }: Props) {
  return (
    <div className="mt-[120px] vsm:mt-[50px] lg:mt-20">
      <div className="lg:max-w-[1300px] container overflow-hidden mx-auto">
        <div className="lg:max-w-[1300px] lg:max-h-[783px] bg-light-blue rounded-3xl">
          <div className="relative  px-6 pt-8 pb-20 lg:px-8 lg:pb-28">
            <div className="relative mx-auto max-w-7xl">
              <div className="text-left mt-5">
                <h2 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
                  {slice.primary.title1}{" "}
                  <span className="text-default-blue font-raleway">
                    {slice.primary.title2}
                  </span>
                </h2>
                <p className="mt-3 lg:w-[453px] h-[48px] text-base font-normal max-w-2xl text-gray-500 sm:mt-4 mb-10">
                  <PrismicRichText field={slice.primary.description} />
                </p>
              </div>

              <div className="mx-auto mt-12 lg:mt-20">
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={3}
                  slidesToScroll={1}
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ]}
                >
                  {slice.primary.cardData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-[362px] pr-5 overflow-hidden"
                    >
                      <div className="bg-white rounded-lg p-6">
                        <PrismicNextImage
                          alt=""
                          className="h-48 w-full rounded-lg object-cover mb-4"
                          field={item.cardImage as ImageFieldImage}
                        />
                        <div>
                          <Link href="#" className="block mb-2">
                            <p className="text-xl lg:text-2xl font-semibold text-gray-900">
                              {item.heading}
                            </p>
                            <p className="mt-3 font-normal font-Raleway text-base text-gray-600">
                              <PrismicRichText field={item.description} />
                            </p>
                          </Link>
                        </div>
                        <p className="text-base text-gray-900 font-semibold mb-2">
                          <Link
                            href="#"
                            className="hover:underline text-indigo-600"
                          >
                            {item.clientLabel}{" "}
                          </Link>
                          <span className="text-gray-600">
                            {item.clientName}
                          </span>
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {slice.primary.iconImages.map((item, index) => (
                            <div key={index} className="flex items-center">
                              <PrismicNextImage
                                alt=""
                                className="w-6 h-6 mr-2"
                                field={item.iconImg as ImageFieldImage}
                              />
                              <p className="text-base text-gray-900">
                                {item.title}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
