"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavbarDocumentData, Simplify } from "../../prismicio-types";
import { PrismicDocumentWithoutUID } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import DropdownItems from "../../slices/Menus"; // Ensure the correct import path
import Menus from "../../slices/Menus"; // Ensure the correct import path

interface Props {
  navbar: PrismicDocumentWithoutUID<Simplify<NavbarDocumentData>>;
}

const components = {
  dropdown_items: DropdownItems,
  menus: Menus, // Register the Menus component
};

export default function Navbar({ navbar }: Props) {
  const { data } = navbar;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuButtonClicked(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav className="p-4 absolute w-full z-20 bg-transparent">
        <div className="container mx-auto mt-20 flex justify-between items-center">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="text-white font-medium text-3xl mb-4 lg:mb-0">
              <PrismicNextImage alt="" field={data.logoImg} />
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
                  <PrismicNextImage alt="" field={data.logoImg} />
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

              <SliceZone slices={navbar.data.slices} components={components} />
              <div className="w-full flex justify-center lg:justify-start  mb-4 lg:mb-0">
                <button className="bg-default-blue text-white font-Raleway lg:mt-0 vsm:mt-36 text-base rounded w-[148px] h-[52px]">
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
