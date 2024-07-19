"use client";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import React, { useState } from "react";

export type MenusProps = SliceComponentProps<Content.MenusSlice>;

export default function Menus({ slice }: MenusProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const hasChildMenus =
    slice?.primary?.childmenus && slice?.primary?.childmenus?.length > 0;

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className="relative mb-4 lg:mb-0" style={{ whiteSpace: "nowrap" }}>
      <li
        className="text-white gap-3 font-Raleway text-base px-4 py-2 whitespace-nowrap hover:text-default-blue flex items-center"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <PrismicNextLink field={slice?.primary?.menulink}>
          {slice?.primary?.menulabel}
        </PrismicNextLink>

        {hasChildMenus && (
          <svg
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            role="button"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </li>

      {hasChildMenus && isDropdownOpen && (
        <div
          className="absolute bg-white top-full left-0 py-2 rounded-lg shadow-lg"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          {slice?.primary?.childmenus?.map((item: any, index: any) => (
            <PrismicNextLink
              key={index}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              field={item?.menulink}
            >
              {item?.menulabel}
            </PrismicNextLink>
          ))}
        </div>
      )}
    </div>
  );
}
