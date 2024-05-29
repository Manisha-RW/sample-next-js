import React from "react";

const statisticData = [
  { label: "Years Of Experience", count: "+12" },
  { label: "Success Projects", count: "+524" },
  { label: "Active Projects", count: "+35" },
  { label: "Happy Customers", count: "+420" },
];

const Statistics = () => {
  return (
    <div className="relative mt-10 lg:mt-0">
      <div className="absolute inset-x-0 bottom-0 lg:-bottom-16 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg grid grid-cols-2 sm:grid-cols-4">
            {statisticData?.map((i, index) => (
              <div key={index} className="flex flex-col p-4 sm:p-6 text-center">
                <dd className="text-4xl leading-[57.6px] font-Raleway text-5xl font-medium leading-none text-blue">
                  {i.count}
                </dd>
                <dt className="text-base text-gray-600 font-Raleway font-medium leading-6">
                  {i.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
