import React from "react";
import Link from "next/link";
import { PrismicDocumentWithoutUID } from "@prismicio/client";
import { Simplify, TopNavbarDocumentData } from "../../prismicio-types";

interface Props {
  topNavbar: PrismicDocumentWithoutUID<Simplify<TopNavbarDocumentData>>;
}

const TopNavbar: React.FC<Props> = ({ topNavbar }) => {
<<<<<<< HEAD
  
=======

>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
  return (
    <div className="bg-default-blue text-white py-4 sm:py-6 px-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-auto md:mb-0 mb-8 text-center"></div>
        <div className="w-full md:w-auto flex justify-center md:justify-end">
<<<<<<< HEAD
          <ul className="list-reset flex text-xs md:text-sm gap-x-5 md:gap-x-10">
=======
          <ul className="list-reset flex flex-wrap text-xs md:text-sm gap-x-5 md:gap-x-10">
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
            {topNavbar.data.navData.map((topNav: any, index: any) => (
              <li key={index}>
                <Link legacyBehavior href={topNav?.link}>
                  <a className="text-white text-xs font-open leading-[18.6px] hover:text-white">
                    {topNav?.label}
                  </a>
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
