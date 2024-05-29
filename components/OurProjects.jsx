"use client";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const projectData = {
  title1: "Our Recent",
  title2: "Projects",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin felis ut eros laoreet",
  cardData: [
    {
      image: "/images/Project-1.jpg",
      heading: "Al Raha Beach Buildings",
      description: "Etiam nec nulla justo Curabitur tristique, ",
      client: "Client: Al Dar",
      location: "ABU DHABI",
      iconImages: [
        { title: "ABU DHABI", iconImg: "/images/icon-1.png" },
        { title: "Al Futtaim Carillion", iconImg: "/images/icon-2.png" },
        { title: "Turner", iconImg: "/images/icon-3.png" },
      ],
    },
    {
      image: "/images/Project-2.png",
      heading: "Al Raha Beach Buildings",
      description: "Etiam nec nulla justo Curabitur tristique, ",
      client: "Client: Al Dar",
      location: "ABU DHABI",
      iconImages: [
        { title: "ABU DHABI", iconImg: "/images/icon-1.png" },
        { title: "Al Futtaim Carillion", iconImg: "/images/icon-2.png" },
        { title: "Turner", iconImg: "/images/icon-3.png" },
      ],
    },
    {
      image: "/images/Project-3.png",
      heading: "Al Raha Beach Buildings",
      description: "Etiam nec nulla justo Curabitur tristique, ",
      client: "Client: Al Dar",
      location: "ABU DHABI",
      iconImages: [
        { title: "ABU DHABI", iconImg: "/images/icon-1.png" },
        { title: "Al Futtaim Carillion", iconImg: "/images/icon-2.png" },
        { title: "Turner", iconImg: "/images/icon-3.png" },
      ],
    },
    {
      image: "/images/Project-1.jpg",
      heading: "Al Raha Beach Buildings",
      description: "Etiam nec nulla justo Curabitur tristique, ",
      client: "Client: Al Dar",
      location: "ABU DHABI",
      iconImages: [
        { title: "ABU DHABI", iconImg: "/images/icon-1.png" },
        { title: "Al Futtaim Carillion", iconImg: "/images/icon-2.png" },
        { title: "Turner", iconImg: "/images/icon-3.png" },
      ],
    },
    {
      image: "/images/Project-2.png",
      heading: "Al Raha Beach Buildings",
      description: "Etiam nec nulla justo Curabitur tristique, ",
      client: "Client: Al Dar",
      location: "ABU DHABI",
      iconImages: [
        { title: "ABU DHABI", iconImg: "/images/icon-1.png" },
        { title: "Al Futtaim Carillion", iconImg: "/images/icon-2.png" },
        { title: "Turner", iconImg: "/images/icon-3.png" },
      ],
    },
  ],
};

const OurProjects = () => {
  const { title1, title2, description, cardData } = projectData;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-[120px]">
      <div className="justify-center items-center flex">
        <div className="lg:max-w-[1300px] lg:max-h-[783px] bg-light-blue">
          <div className="relative  px-6 pt-8 pb-20 lg:px-8 lg:pb-28">
            <div className="relative mx-auto max-w-7xl">
              <div className="text-left">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  {title1}
                  <span className="text-default-blue"> {title2}</span>
                </h2>
                <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4 mb-10">
                  {description}
                </p>
              </div>

              {/* Slider Card */}
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
                <Slider {...settings}>
                  {cardData?.map((i) => (
                    <div className="flex flex-col w-[362px] pr-5 overflow-hidden">
                      <div className="flex flex-1 flex-col justify-between rounded-lg bg-white p-6">
                        <img
                          className="h-48 w-full rounded-lg"
                          src={i.image}
                          alt=""
                        ></img>
                        <div className="flex-1">
                          <Link href="#" className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">
                              {i.heading}
                            </p>
                            <p className="mt-3 text-base text-gray-600">
                              {i.description}
                            </p>
                          </Link>
                        </div>
                        <p className="text-sm font-medium ">
                          <Link
                            href="#"
                            className="hover:underline text-indigo-600 text-base"
                          >
                            Client:
                          </Link>
                          <span className="text-gray-600"> Al Dar</span>
                        </p>

                        {i?.iconImages?.map((data, index) => (
                          <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                              <img src={data.iconImg}></img>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
                                {data.title}
                              </p>
                            </div>
                          </div>
                        ))}
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
