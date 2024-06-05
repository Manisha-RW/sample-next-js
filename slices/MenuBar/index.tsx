/**
 * @typedef {import("@prismicio/client").Content.MenuBarSlice} MenuBarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuBarSlice>} MenuBarProps
 * @param {MenuBarProps}
 */

"use client";
import {
  ImageFieldImage,
  KeyTextField,
  LinkField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React, { useState, useEffect } from "react";

interface Props {
  slice: {
    primary: {
      links: Array<{
        label: KeyTextField;
        link: LinkField;
      }>;

      logoImg: ImageFieldImage[];
      dropdownLabel: KeyTextField;
      dropdown: Array<{
        label: KeyTextField;
        link: LinkField;
      }>;
    };
  };
}

export default function MenuBar({ slice }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuButtonClicked(true);
  };

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen(dropdown === isDropdownOpen ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1024);
  };

  // useEffect(() => {
  //   if (isDropdownOpen) {
  //     setDropdownItems(
  //       data.links.find((menu) => menu.label === isDropdownOpen).dropdown
  //     );
  //   }
  // }, [isDropdownOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <nav className="p-4 absolute w-full z-20 bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="text-white font-medium text-3xl mb-4 lg:mb-0">
              {/* <img src={props?.logoImg} alt="Logo" /> */}
              <PrismicNextImage
                alt=""
                field={slice.primary.logoImg as ImageFieldImage}
              />
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${
              isMenuButtonClicked
                ? isMenuOpen
                  ? "translate-x-0"
                  : "-translate-x-full"
                : "hidden"
            } lg:translate-x-0 lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 fixed top-0 left-0 h-full w-3/4 lg:w-auto bg-black lg:bg-transparent transition-transform lg:relative`}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mt-4 lg:mt-0 w-full lg:w-auto">
              <div className="lg:hidden w-full flex justify-between items-center px-4 mt-4">
                <div className="text-white font-bold text-3xl mb-4 lg:mb-0">
                  {/* <img src={props?.logoImg} alt="Logo" /> */}
                  <PrismicNextImage
                    alt=""
                    field={slice.primary.logoImg as ImageFieldImage}
                  />
                </div>
                <button
                  onClick={closeMenu}
                  className="text-white focus:outline-none"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              {slice.primary.links.map((item, index) => (
                <React.Fragment key={item.label}>
                  <div className="relative mb-4 lg:mb-0">
                    <button
                      // onClick={() => toggleDropdown({menu.label})}
                      className="text-white font-Raleway text-base px-4 py-2 whitespace-nowrap"
                    >
                      <PrismicNextLink field={item.link}>
                        {item.label}
                      </PrismicNextLink>

                      <svg
                        className="h-4 w-4 inline ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* <div className="absolute bg-white top-full left-0 mt-2 py-2 rounded-lg shadow-kg">
                          {slice.primary.dropdown.map((item) => (
                            // <Link
                            //   key={dropDown?.label}
                            //   href={dropDown?.link}
                            //   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            //   onClick={closeMenu}
                            // >
                            //   {dropDown?.label}
                            // </Link>
                            <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
                          ))}
                        </div> */}
                  </div>
                </React.Fragment>
              ))}
              <div className="w-full flex justify-center lg:justify-start mb-4 lg:mb-0">
                <button
                  className={`bg-default-blue text-white font-Raleway text-base rounded w-[148px] h-[52px] ${
                    isMenuOpen || isSmallScreen
                      ? "mt-36"
                      : "mt-4 lg:mt-0 lg:ml-auto lg:order-last"
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
