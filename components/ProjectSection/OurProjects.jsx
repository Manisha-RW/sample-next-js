"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const OurProjects = ({ props }) => {
  return (
    <div className="mt-[120px] vsm:mt-[50px] lg:mt-20">
      <div className="lg:max-w-[1300px] container overflow-hidden mx-auto">
        <div className="lg:max-w-[1300px] lg:max-h-[783px] bg-light-blue rounded-3xl">
          <div className="relative  px-6 pt-8 pb-20 lg:px-8 lg:pb-28">
            <div className="relative mx-auto max-w-7xl">
              <div className="text-left mt-5">
                <h2 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
                  {props?.title1}{" "}
                  <span className="text-default-blue font-raleway">
                    {props?.title2}
                  </span>
                </h2>
                <p className="mt-3 lg:w-[453px] h-[48px] text-base font-normal max-w-2xl text-gray-500 sm:mt-4 mb-10">
                  {props?.description}
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
                  {props?.cardData?.map((card, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-[362px] pr-5 overflow-hidden"
                    >
                      <div className="bg-white rounded-lg p-6">
                        <img
                          className="h-48 w-full rounded-lg object-cover mb-4"
                          src={card?.image}
                          alt=""
                        />
                        <div>
                          <Link href="#" className="block mb-2">
                            <p className="text-xl lg:text-2xl font-semibold text-gray-900">
                              {card?.heading}
                            </p>
                            <p className="mt-3 font-normal font-Raleway text-base text-gray-600">
                              {card?.description}
                            </p>
                          </Link>
                        </div>
                        <p className="text-base text-gray-900 font-semibold mb-2">
                          <Link
                            href="#"
                            className="hover:underline text-indigo-600"
                          >
                            Client:
                          </Link>
                          <span className="text-gray-600"> Al Dar</span>
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {card?.iconImages?.map((cardData, index) => (
                            <div key={index} className="flex items-center">
                              <img
                                src={cardData.iconImg}
                                alt=""
                                className="w-6 h-6 mr-2"
                              />
                              <p className="text-base text-gray-900">
                                {cardData?.title}
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
};

export default OurProjects;
