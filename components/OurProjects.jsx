"use client";
import React from "react";
import "../app/globals.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    image: "/images/Project-1.jpg",
    heading: "Al Raha Beach Buildings",
    description: "Etiam nec nulla justo Curabitur tristique, ",
    client: "Client: Al Dar",
    location: "ABU DHABI",
  },
  {
    image: "/images/Project-2.png",
    heading: "Al Raha Beach Buildings",
    description: "Etiam nec nulla justo Curabitur tristique, ",
    client: "Client: Al Dar",
    location: "ABU DHABI",
  },
  {
    image: "/images/Project-3.png",
    heading: "Al Raha Beach Buildings",
    description: "Etiam nec nulla justo Curabitur tristique, ",
    client: "Client: Al Dar",
    location: "ABU DHABI",
  },
  {
    image: "/images/Project-1.jpg",
    heading: "Al Raha Beach Buildings",
    description: "Etiam nec nulla justo Curabitur tristique, ",
    client: "Client: Al Dar",
    location: "ABU DHABI",
  },
  {
    image: "/images/Project-2.png",
    heading: "Al Raha Beach Buildings",
    description: "Etiam nec nulla justo Curabitur tristique, ",
    client: "Client: Al Dar",
    location: "ABU DHABI",
  },
];

const OurProjects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="justify-center items-center flex">
      <div className="lg:max-w-[1300px] lg:max-h-[783px] bg-light-blue">
        <div className="relative  px-6 pt-8 pb-20 lg:px-8 lg:pb-28">
          <div className="relative mx-auto max-w-7xl">
            <div className="text-left">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Our Recent <span className="text-default-blue">Projects </span>
              </h2>
              <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sollicitudin felis ut eros laoreet
              </p>
            </div>

            {/* Slider Card */}

            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <Slider {...settings}>
                {cardData?.map((i) => (
                  <div className="flex flex-col w-[362px] pr-5 overflow-hidden">
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <img
                        className="h-48 w-full rounded-lg"
                        src={i.image}
                        alt=""
                      ></img>
                      <div className="flex-1">
                        <a href="#" className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">
                            {i.heading}
                          </p>
                          <p className="mt-3 text-base text-gray-600">
                            {i.description}
                          </p>
                        </a>
                      </div>
                      <p className="text-sm font-medium ">
                        <a
                          href="#"
                          className="hover:underline text-indigo-600 text-base"
                        >
                          Client:
                        </a>
                        <span className="text-gray-600"> Al Dar</span>
                      </p>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <span className="sr-only">Roel Aufderehar</span>
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                              Roel Aufderehar
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time datetime="2020-03-16">Mar 16, 2020</time>
                            <span aria-hidden="true">·</span>
                            <span>6 min read</span>
                          </div>
                        </div>
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
  );
};

export default OurProjects;
