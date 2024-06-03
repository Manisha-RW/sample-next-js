import React from "react";

const Statistics = ({props}) => {
  return (
    <div className="relative mt-10 lg:mt-0">
      <div className="absolute inset-x-0 bottom-0 lg:-bottom-16 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-kg grid grid-cols-2 sm:grid-cols-4">
            {props?.map((statistics, index) => (
              <div key={index} className="flex flex-col p-4 sm:p-6 text-center">
                <dd className="text-4xl leading-[57.6px]  text-5xl font-medium leading-none text-blue">
                  {statistics.count}
                </dd>
                <dt className="text-base text-gray-600 font-Raleway font-medium leading-6">
                  {statistics.label}
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
