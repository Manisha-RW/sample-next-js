import React from "react";
const faqsData = {
  title1: "FAQ",
  title2: "s",
  description:
    "Suspendisse potenti. Vestibulum gravida turpis ut ipsum efficitur, idullamcorper sem semper",
  faqData: [
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
  ],
};
const Faq = () => {
  const { title1, title2, description, faqData } = faqsData;
  return (
    <div className="mt-20">
      <div className="mx-auto px-5 w-full max-w-screen-lg">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center font-medium text-3xl md:text-5xl leading-tight md:leading-[58px]">
            {title1}<span className="text-default-blue">{title2}</span>
          </h2>
          <p className="mt-3 font-raleway text-base font-normal text-neutral-500 text-center">
            {description}
          </p>
        </div>
        {faqData.map((item, index) => (
          <div key={index} className="mx-auto mt-8 w-full">
            <div className="transition-all duration-200 bg-white shadow-lg cursor-pointer hover:bg-gray-50">
              <div className="mx-auto grid divide-y divide-neutral-200">
                <div className="py-5 w-full">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span className="font-jakrata text-base font-semibold">
                        {item.heading}
                      </span>
                      <span className="transition">
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
    </div>
  );
};
export default Faq;