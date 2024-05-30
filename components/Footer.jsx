import React from "react";
import Link from "next/link";

const Footer = ({ data }) => {
  return (
    <footer className="w-full bg-default-blue">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            {data?.logoImage && (
              <Link
                href={data?.logoLink}
                className="flex justify-center lg:justify-start"
              >
                <img src={data?.logoImage} alt="Logo" />
              </Link>
            )}
            <div className="py-4 text-sm text-white lg:max-w-[266px] lg:max-h-[101px] text-center lg:text-left">
              <h1 className="font-raleway font-semibold text-xl">
                {data?.title}
              </h1>
              <h2 className="font-raleway font-normal text-base text-gray-300">
                {data?.description}
              </h2>
              <p className="lg:max-w-[175px] lg:max-h-[44px] text-gray-400">
                {data?.address}
              </p>
            </div>

            {/* Social  Icons*/}
            <div className="flex mt-4 py-8 space-x-4 justify-center lg:justify-start sm:mt-0 ">
              {data?.socialData?.map((i) => (
                <Link
                  href={i?.socialLink}
                  className="w-9 h-9 rounded-full flex justify-center items-center "
                >
                  <img src={i?.image}></img>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {data?.linksData?.map((i, indexs) => (
            <div
              className="lg:mx-auto text-center sm:text-left text-white"
              key={indexs}
            >
              <h4 className="text-base font-semibold font-raleway mb-7">
                {i.heading}
              </h4>
              <ul>
                {i.links?.map((items, index) => (
                  <li
                    key={index}
                    className="mb-6 font-raleway text-gray-400 font-normal text-sm"
                  >
                    <Link href="/">{items?.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-gray-400" />
      <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
        <p className=" text-gray-400 font-raleway text-sm md:text-[12px] font-normal">
          {data?.copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
