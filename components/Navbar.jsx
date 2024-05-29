import React from "react";
import Link from "next/link";

const navbarData = {
  logoImg: "/images/svgviewer-png-output.png",
  links: [
    { link: "/", label: "Home" },
    { link: "/", label: "About Us" },
    { link: "/", label: "Our Brands" },
    { link: "/", label: "Projects" },
    { link: "/", label: "Eng" },
  ],
};

const Navbar = () => {
  const { logoImg, links } = navbarData;
  return (
    <div>
      <nav className="bg-black bg-transparent p-4 absolute w-full z-20">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="text-white font-bold text-3xl mb-4 lg:mb-0">
            <img src={logoImg} alt="Logo" />
          </div>
          {/* <div className="lg:hidden">
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
            </div> */}
          <div className="hidden text-white lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
            {links?.map((i) => (
              <Link href={i.link} className="text-white px-4 py-2">
                {i.label}
              </Link>
            ))}
            <button className="bg-default-blue w-[148px] h-[52px] mt-4 lg:mt-0">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
