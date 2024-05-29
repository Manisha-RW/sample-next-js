import React from "react";
import Head from "next/head";
import Button from "./Button";

const bannerData = {
  bgImage: "/images/bgImg.jpg",
  heading: "Shaping Bathrooms Into Something More",
  subHeading:
    "Transform Your Bathroom into a Luxurious Oasis - Innovative Design and Quality Products to Create Your Dream Bathroom",
};

const Banner = () => {
  const { bgImage, heading, subHeading } = bannerData;
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Banner Section */}
      <div className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 lg:px-0">
          <h1 className="lg:max-w-[689px] lg:max-h-[140px] text-[32px] lg:text-[64px] font-medium leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-base lg:max-w-[613px] lg:max-h-[48px] py-5 leading-6 mb-8">
            {subHeading}
          </p>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Banner;
