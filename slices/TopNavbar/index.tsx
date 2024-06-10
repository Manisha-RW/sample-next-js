/**
 * @typedef {import("@prismicio/client").Content.TopNavbarSlice} TopNavbarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopNavbarSlice>} TopNavbarProps
 * @param {TopNavbarProps}
 */

import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

interface Props {
  slice: {
    primary: {
      navData: Array<{
        label: KeyTextField;
        link: LinkField;
      }>;
    };
  };
}

export default function TopNavbar({ slice }: Props) {
  return (
    <div className="bg-default-blue text-white py-4 sm:py-6 px-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-auto md:mb-0 mb-8 text-center"></div>
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <ul className="list-reset flex flex-wrap text-xs md:text-sm gap-x-5 md:gap-x-10">
            {slice.primary.navData.map((item, index) => (
              <li key={index}>
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
