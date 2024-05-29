import Head from "next/head";
import React from "react";

const aboutData = [
  {
    image: "/images/about.png",
    title1: "Who",
    title2: "We Are",
    description1:
      "Al Hayat Building Materials Company HBMC, established in 1983, is a member of Issam Kheiry Kabbani IKK Group of Companies and is dedicated to supplying building materials of different scopes. HBMC is known to be among the strongest in the region for supplying bathroom finishing, kitchens and building materials.",
    description2:
      "Headquartered in Jeddah, HBMC’s 35 branches stretch out geographically to cover the entire Kingdom of Saudi Arabia. 600 employees who aim to thrive in servicing our 4,000+ clients. In addition to offering a wide variety of water complementary quality products, HBMC is a leader for introducing the latest technology and innovations in the field. At HBMC, we offer an experience. Most of our products are directly imported from manufacturers around the globe.",
  },
];

const About = () => {
  return (   
    <div className="mt-20 lg:mt-40 overflow-hidden">
      <div className="container mx-auto px-4">
        {aboutData?.map((data, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center gap-10 lg:gap-20 lg:items-center"
          >
            <div className="w-full lg:w-[590px] h-auto lg:h-[563px] relative">
              <img
                src={data?.image}
                className="rounded-lg w-full h-auto lg:max-w-full"
                alt="About us"
              />
            </div>
            <div className="text w-full lg:w-[572px]">
              <h2 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
                {data?.title1}
                <span className="text-default-blue font-raleway"> {data?.title2}</span>
              </h2>
              <div className="leading-6 font-Raleway">
                <p className="mb-6 md:mb-12 text-sm lg:text-base">
                  {data?.description1}
                </p>
                <p className="text-sm lg:text-base">{data?.description2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
