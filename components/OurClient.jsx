"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ourClientData = {
  title1: "What",
  title2: "Our Clients",
  title3: "Say",
  clientData: [
    {
      image: "/images/client-1.jpg",
      name: "Ralph Edwards",
      position: "Senior SEO Executive",
      description:
        "I am absolutely delighted to share my positive experience as a client. From the moment I engaged with the company, I was met with exceptional professionalism and dedication to ensuring my satisfaction. The level of service provided was truly outstanding, and every interaction I had with the team was characterized by their unwavering commitment to excellence.",
    },
    {
      image: "/images/client-1.jpg",
      name: "Marina",
      position: "CEO",
      description:
        "I am absolutely delighted to share my positive experience as a client. From the moment I engaged with the company, I was met with exceptional professionalism and dedication to ensuring my satisfaction. The level of service provided was truly outstanding, and every interaction I had with the team was characterized by their unwavering commitment to excellence.",
    },
    {
      image: "/images/client-1.jpg",
      name: "George",
      position: "Manager",
      description:
        "I am absolutely delighted to share my positive experience as a client. From the moment I engaged with the company, I was met with exceptional professionalism and dedication to ensuring my satisfaction. The level of service provided was truly outstanding, and every interaction I had with the team was characterized by their unwavering commitment to excellence.",
    },
  ],
};

const OurClient = () => {
  const { title1, title2, title3, clientData } = ourClientData;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-28 flex flex-col items-center">
      <div className="text-gray-900 text-5xl text-lg mb-1 font-medium title-font">
        {title1} <span className="text-default-blue">{title2}</span> {title3}
      </div>

      <div className="client-slider-container shadow-lg w-full max-w-4xl mt-8">
        <Slider {...settings}>
          {clientData.map((client, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-4xl h-auto md:h-[471px] rounded-lg p-8 text-center flex flex-col items-center">
                <img
                  className="h-24 w-24 md:h-[102px] md:w-[102px] rounded-full"
                  src={client.image}
                  alt={`Client ${client.name}`}
                />
                <p className="font-medium text-xl md:text-2xl font-raleway text-project-blue mt-4">
                  {client.name}
                </p>
                <p className="text-base text-gray-600 mt-4 dark:text-white">
                  {client.position}
                </p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <svg
                      key={i}
                      className="text-yellow-500 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <div className="flex w-full max-w-3xl">
                    <img
                      className="w-9 h-10 mx-auto text-gray-400"
                      src="/images/Inverted-comma.png"
                      alt="Inverted comma"
                    />
                    <p className="w-full text-base text-gray-600 dark:text-white">
                      {client.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClient;
