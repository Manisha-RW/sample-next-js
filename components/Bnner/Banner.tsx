import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-300 to-slate-500">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-[720px]">
            <h1 className="mb-3 pb-4 text-4xl font-bold text-default-blue  md:text-6xl">
              Fast, Reliable and Secure
            </h1>
            <p className="mb-6 max-w-[528px] text-xl md:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="] mr-5 inline-block rounded-full bg-light-blue px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
              >
                Lets Talk
              </a>
              <a
                href="#"
                className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold"
              >
                <p className="">View Showreel</p>
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
              alt=""
              className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
