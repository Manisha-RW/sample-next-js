import React from "react";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center gap-20 height-[563px]">
        <div className="sm:flex items-center w-[590px] h-[563px]">
          <div className="relative  w-full h-full">
            <img
              src="/images/about-1.png"
              className="rounded-lg w-[379px] h-[526px] absolute"
            />
            <img
              src="/images/about-2.png"
              className="rounded-lg absolute bottom-0 right-0 w-[318px] h-[415px] sm:top-[132px] sm:left-[255px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text w-[572px] h-[370px]">
            <h2 className="font-raleway font-semi-bold leading-10 text-5xl font-semibold leading-12 text-left text-lg mb-22">
              Who <span className="text-default-blue">We Are</span>
            </h2>
            <div className="leading-6 font-railway">
              <p className="mb-12">
                Al Hayat Building Materials Company HBMC, established in
                1983,is a member of Issam Kheiry Kabbani IKK Group of
                Companies and is dedicated to supplying building materials of
                different scopes. HBMC is known to be among the strongest in the
                region for supplying bathroom finishing, kitchens and building
                materials.
              </p>
              <p>
                Headquartered in Jeddah, HBMC’s 35 branches stretch out
                geographically to cover the entire Kingdom of Saudi Arabia. 600
                employees who aim to thrive in servicing our 4,000 + clients.In
                addition to offering a wide variety of water complementary
                quality products, HBMC is a leader for introducing the latest
                technology and innovations in the field. At HBMC, We offer an
                experience. Most of our products are directly imported from
                manufacturers around the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
