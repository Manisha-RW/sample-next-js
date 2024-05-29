import Head from "next/head";
import React from "react";

const contactData = {
  image: "/images/contact.png",
  title1: "Contact",
  title2: "Us",
  description:
    "We’d love to speak to you and understand how we can work together to make graph analytics better.",
};

const ContactUs = () => {
  const { image, title1, title2, description } = contactData;
  return (
    <div className="mt-[120px]">
      <section className="pb-10">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="container lg:max-w-[1140px] lg:max-h-[589px] px-5 mx-auto flex flex-col lg:flex-row sm:flex-nowrap flex-wrap">
          {/* Left Picture */}
          <div className="lg:max-w-[589px] lg:max-h-[589px] w-full lg:w-auto">
            <img
              className="rounded-lg w-full lg:w-[570px] h-[570px] mx-auto"
              src={image}
              alt="Contact Us"
            />
          </div>
          {/* Right Form */}
          <div className="lg:w-[493px] lg:h-[516px] bg-white flex flex-col md:ml-auto w-full md:pt-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 heading text-lg mb-1 title-font">
              {title1} <span className="text-default-blue">{title2}</span>
            </h2>
            <p className="leading-relaxed font-Raleway text-base font-normal mb-5 text-gray-600">{description}</p>

            <div className="flex mb-4 gap-5">
              <div className="relative mb-4 w-full lg:w-1/2">
                <label htmlFor="name" className="leading-7 text-sm ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full shadow-md bg-white rounded border border-gray-100 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm ">
                  Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full shadow-md lg:max-w-[241px] lg:max-h-[52px] bg-white rounded border border-gray-100 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-email"
                >
                  Email Address*
                </label>
                <input
                  className="appearance-none shadow-md block w-full  text-gray-700 border border-gray-100 focus:ring-2 focus:ring-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Any Questions?
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full lg:w-[492px] shadow-md lg:h-[72px] bg-white rounded border border-gray-100 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="w-full lg:w-[492px] text-white bg-default-blue font-semibold font-raleway text-base border-0 py-2 px-6 focus:outline-none rounded">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
