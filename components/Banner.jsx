import React from "react";
import Head from "next/head";
import Link from "next/link";

const statisticData = [
  { label: "Years Of Experience", count: "+12" },
  { label: "Success Projects", count: "+524" },
  { label: "Active Projects", count: "+35" },
  { label: "Happy Customers", count: "+420" },
];

const Banner = () => {
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
        <nav className="bg-black bg-transparent p-4 absolute w-full z-20">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="text-white font-bold text-3xl mb-4 lg:mb-0">
              <img src="/images/svgviewer-png-output.png" alt="Logo" />
            </div>
            <div className="lg:hidden">
              <button className="text-white focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
              <Link href="/" className="text-white px-4 py-2">
                Home
              </Link>
              <Link href="/" className="text-white px-4 py-2">
                About Us
              </Link>
              <Link href="/" className="text-white px-4 py-2">
                Our Brands
              </Link>
              <Link href="/" className="text-white px-4 py-2">
                Projects
              </Link>
              <Link href="/" className="text-white px-4 py-2">
                Eng
              </Link>
              <button className="bg-default-blue w-[148px] h-[52px] mt-4 lg:mt-0">
                Contact Us
              </button>
            </div>
          </div>
        </nav>

        <div className="absolute inset-0">
          <img
            src="/images/bgImg.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 lg:px-0">
          <h1 className="lg:max-w-[689px] lg:max-h-[140px] text-[32px] lg:text-[64px] font-medium leading-tight mb-4">
            Shaping Bathrooms Into Something More
          </h1>
          <p className="text-base lg:max-w-[613px] lg:max-h-[48px] py-5 leading-6 mb-8">
            Transform Your Bathroom into a Luxurious Oasis - Innovative Design
            and Quality Products to Create Your Dream Bathroom
          </p>
          <div className="bg-default-blue text-base py-2 px-6 w-[194px] h-[52px] rounded-lg">
            <Link href="#" className="font-semibold">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
      {/* Statistics */}
      <div className="relative mt-10 lg:mt-0">
        <div className="absolute inset-x-0 bottom-0 lg:-bottom-16 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg grid grid-cols-2 sm:grid-cols-4">
              {statisticData?.map((i, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 sm:p-6 text-center"
                >
                  <dt className="text-base text-gray-600 font-medium leading-6">
                    {i.label}
                  </dt>
                  <dd className="text-4xl sm:text-5xl font-medium leading-none text-blue">
                    {i.count}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
