import React from "react";
import Head from "next/head";
import Link from "next/link";

const navData = [
  { label: "Personal", link: "/" },
  { label: "Business", link: "/" },
  { label: "Wholesale", link: "/" },
  { label: "Sustainability", link: "/" },
  { label: "Investors", link: "/" },
];

const TopNavbar = () => {
  return (
    <div className="bg-default-blue text-white py-4 sm:py-6 px-3">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto flex md:flex-row items-center justify-between">
        <div className="w-full md:w-auto md:mb-0 mb-8 text-center">
        </div>
        <div className="w-full md:w-auto">
          <ul className="list-reset flex justify-center md:justify-end flex-wrap text-xs md:text-sm gap-x-5 md:gap-x-10">
            {navData?.map((item, index) => (
              <li className="font-open" key={index}>
                <Link href={item.link} className="text-white hover:text-white">
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
