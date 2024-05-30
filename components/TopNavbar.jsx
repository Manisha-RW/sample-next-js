import React from "react";
import Link from "next/link";

const TopNavbar = ({data}) => {
  return (
    <div className="bg-default-blue text-white py-4 sm:py-6 px-3">
      <div className="container mx-auto flex md:flex-row items-center justify-between">
        <div className="w-full md:w-auto md:mb-0 mb-8 text-center">
        </div>
        <div className="w-full md:w-auto">
          <ul className="list-reset flex justify-center md:justify-end flex-wrap text-xs md:text-sm gap-x-5 md:gap-x-10">
            {data?.map((item, index) => (
              <li  key={index}>
                <Link href={item.link} className="text-white text-xs font-open leading-[18.6px] hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
