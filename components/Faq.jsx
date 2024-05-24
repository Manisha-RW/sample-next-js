"use client";
import React, { useState } from "react";

const faqData = [
  {
    heading: "Maecenas porttitor enim nec velit ultrices?",
    description:
      "Pellentesque iaculis, nisl et consectetur mattis, neque eros finibus elit, quis semper ipsum lorem vel augue. Aliquam erat volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna risus, pulvinar ut metus at, consequat aliquet justo. Mauris egestas aliquam ligula ut molestie",
  },
  {
    heading: "Maecenas porttitor enim nec velit ultrices?",
    description:
      "Pellentesque iaculis, nisl et consectetur mattis, neque eros finibus elit, quis semper ipsum lorem vel augue. Aliquam erat volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna risus, pulvinar ut metus at, consequat aliquet justo. Mauris egestas aliquam ligula ut molestie",
  },
  {
    heading: "Maecenas porttitor enim nec velit ultrices?",
    description:
      "Pellentesque iaculis, nisl et consectetur mattis, neque eros finibus elit, quis semper ipsum lorem vel augue. Aliquam erat volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna risus, pulvinar ut metus at, consequat aliquet justo. Mauris egestas aliquam ligula ut molestie",
  },
  {
    heading: "Maecenas porttitor enim nec velit ultrices?",
    description:
      "Pellentesque iaculis, nisl et consectetur mattis, neque eros finibus elit, quis semper ipsum lorem vel augue. Aliquam erat volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna risus, pulvinar ut metus at, consequat aliquet justo. Mauris egestas aliquam ligula ut molestie",
  },
];

const Faq = () => {
  const [openStates, setOpenStates] = useState(
    new Array(faqData.length).fill(false)
  );

  const handleToggle = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
  return (
    <div className="mx-auto px-5 w-[782px] h-[466px]">
      <div className="flex flex-col items-center">
        <h2 className="mt-5 text-center font-raleway text-5xl font-semibold leading-[58px]">
          FAQ<span className="text-default-blue">s</span>
        </h2>

        <p className="mt-3 font-raleway text-base font-normal text-neutral-500 ">
          Suspendisse potenti. Vestibulum gravida turpis ut ipsum efficitur, id
          ullamcorper sem semper
        </p>
      </div>

      {faqData?.map((item, index) => (
        <div key={index} className="mx-auto mt-8 ">
          <div className="transition-all duration-200 bg-white shadow-lg cursor-pointer hover:bg-gray-50">
            <div className="mx-auto mt-8 grid divide-y divide-neutral-200">
              <div className="py-5 w-full">
                <details className="group">
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between font-medium"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="font-jakrata text-base font-semibold">
                      {item.heading}
                    </span>
                    <span className="transition">
                      {openStates[index] ? (
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M5 12h14"></path>
                        </svg>
                      ) : (
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M12 5v14"></path>
                          <path d="M5 12h14"></path>
                        </svg>
                      )}
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    {item.description}
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
