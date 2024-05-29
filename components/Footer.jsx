import React from "react";
import Head from "next/head";
import Link from "next/link";

const footerData = {
  logoLink: "/",
  logoImage: "/images/svgviewer-png-output.png",
  title: "Proud member of IKK Group",
  description: "Headquarters",
  address: "Al Nakheel, Jeddah 23241, Saudi Arabia",
  socialData: [
    {
      link: "/",
      image: "/images/facebook.png",
    },
    {
      link: "/",
      image: "/images/instagram.png",
    },
    {
      link: "/",
      image: "/images/twitter.png",
    },
    {
      link: "/",
      image: "/images/youtube.png",
    },
  ],
  linksData: [
    {
      heading: "Company",
      links: [
        { label: "Home", link: "/" },
        { label: "Who we are", link: "/" },
        { label: "Our Products", link: "/" },
        { label: "Our Recent Projects", link: "/" },
        { label: "Contact Us", link: "/" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { label: "Home", link: "/" },
        { label: "About", link: "/" },
        { label: "Email", link: "/" },
      ],
    },
    {
      heading: "IKK Group",
      links: [
        { label: "Home", link: "/" },
        { label: "Contact me", link: "/" },
        { label: "About", link: "/" },
      ],
    },
    {
      heading: "Privacy Policy",
      links: [
        { label: "Home", link: "/" },
        { label: "About", link: "/" },
        { label: "Our Projects", link: "/" },
      ],
    },
  ],
  copyrightText: "© copyright OpulentOasis 2024",
};

const Footer = () => {
  const {
    logoLink,
    logoImage,
    title,
    description,
    address,
    socialData,
    linksData,
    copyrightText,
  } = footerData;
  return (
    <footer className="w-full bg-default-blue">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link
              href={logoLink}
              className="flex justify-center lg:justify-start"
            >
              <img src={logoImage}></img>
            </Link>
            <div className="py-4 text-sm text-white lg:max-w-[266px] lg:max-h-[101px] text-center lg:text-left">
              <h1 className="font-raleway font-semibold text-xl">{title}</h1>
              <h2 className="font-raleway font-normal text-base text-gray-300">
                {description}
              </h2>
              <p className="lg:max-w-[175px] lg:max-h-[44px] text-gray-400">
                {address}
              </p>
            </div>

            {/* Social  Icons*/}
            <div className="flex mt-4 py-8 space-x-4 justify-center lg:justify-start sm:mt-0 ">
              {socialData?.map((i) => (
                <Link
                  href={i.link}
                  className="w-9 h-9 rounded-full flex justify-center items-center "
                >
                  <img src={i.image}></img>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {linksData?.map((i, indexs) => (
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
                    <Link href="/">{items.label}</Link>
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
          {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
