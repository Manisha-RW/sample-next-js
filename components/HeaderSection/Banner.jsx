import React from "react";
import Button from "../Elements/Button";
import { exploreBtnData } from "../../mock_data";

const Banner = ({ props }) => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={props?.bgImage}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 lg:px-0">
          <h1 className="lg:max-w-[689px] font-semibold font-Raleway lg:max-h-[140px] text-[32px] lg:text-[64px] leading-tight mb-4">
            {props?.heading}
          </h1>
          <p className="text-base font-Raleway lg:max-w-[613px] lg:max-h-[48px] py-5 leading-6 mb-8">
            {props?.subHeading}
          </p>
          <Button href={exploreBtnData[0].Btnlink}>{exploreBtnData[0].BtnName}</Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
