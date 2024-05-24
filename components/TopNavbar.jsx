import React from "react";
import Head from "next/head";

const navData = [
  { label: "Personal", link: "/" },
  { label: "Buisness", link: "/" },
  { label: "Wholesale", link: "/" },
  { label: "Sustainability", link: "/" },
  { label: "Investors", link: "/" },
];

const TopNavbar = () => {
  return (
    <div className="bg-default-blue text-white py-4 px-3">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8"></div>
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
          <ul className="list-reset flex justify-end flex-wrap text-xs md:text-sm gap-x-10">
            {navData?.map((i, index) => (
              <li className="font-open" key={index}>
                <a href={i.link} className="text-white hover:text-white">
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
