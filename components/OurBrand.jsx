import React from "react";

const OurBrand = () => {
  return (
    <div className="mt-[120px]">
      <div className="justify-center items-center flex">
      <div className="flex w-[1300px] h-[409px] bg-light-blue justify-center items-center">
        {/* Left section */}
        <div className="lg:max-w-[418px] lg:max-h-[118px]">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Our <span className="text-default-blue">Brands</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            iaculis
          </p>
        </div>
        {/* Right section */}
        <div className="flex justify-center flex-wrap gap-5 lg:inline-grid lg:grid-cols-4 xl:grid-cols-2 p-6">
          <div className="bg-white rounded-lg shadow lg:max-w-[180px] lg:max-h-[80px] flex justify-center items-center">
            <img
              className="lg:max-w-[180px] lg:max-h-[80px]"
              src="/images/Logo-1.png"
            ></img>
          </div>
          <div className="bg-white rounded-lg shadow lg:max-w-[180px] lg:max-h-[80px] flex justify-center items-center">
            <img
              className="lg:max-w-[180px] lg:max-h-[80px]"
              src="/images/Logo-2.png"
            ></img>
          </div>

          <div className="bg-white rounded-lg shadow lg:max-w-[180px] lg:max-h-[80px] flex justify-center items-center">
            <img
              className="lg:max-w-[180px] lg:max-h-[80px]"
              src="/images/Logo-3.png"
            ></img>
          </div>

          <div className="bg-white rounded-lg shadow lg:max-w-[180px] lg:max-h-[80px] flex justify-center items-center">
            <img
              className="lg:max-w-[180px] lg:max-h-[80px]"
              src="/images/Logo-4.png"
            ></img>
          </div>

          <div className="bg-white rounded-lg shadow lg:max-w-[180px] lg:max-h-[80px] flex justify-center items-center">
            <img
              className="lg:max-w-[180px] lg:max-h-[80px]"
              src="/images/Logo-5.png"
            ></img>
          </div>
          <div className="bg-white rounded-lg shadow lg:max-w-[180px] lg:max-h-[80px] flex justify-center items-center">
            <img
              className="lg:max-w-[180px] lg:max-h-[80px]"
              src="/images/Logo-6.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurBrand;
