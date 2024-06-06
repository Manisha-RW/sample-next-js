import React from "react";
import Image from "next/image";

const OurBrand = ({ props }) => {
  return (
    <div className="lg:mt-[120px] vsm:mt-[50px] m:mt-[50px] overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:gap-x-6 w-full max-w-[1300px] rounded-3xl bg-light-blue justify-center items-center p-6">
          {/* Left section */}
          <div className="lg:max-w-[418px] lg:max-h-[118px] mb-6 lg:mb-0">
            <h2 className="font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
              {props?.title1}{" "}
              <span className="text-default-blue font-raleway">
                {props?.title2}
              </span>
            </h2>
            <p>{props?.description}</p>
          </div>
          {/* Right section */}
          <div className="grid grid-cols-2 gap-5">
            {props?.brandImages?.map((brands, index) => (
              <div key={index} className="bg-white rounded-lg shadow-kg w-[180px] h-[80px] flex justify-center items-center">
                <Image
                  key={index}
                  className="max-w-[180px] max-h-[80px]"
                  src={brands?.Img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
