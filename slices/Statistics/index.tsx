import { KeyTextField } from "@prismicio/client";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.StatisticsSlice} StatisticsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatisticsSlice>} StatisticsProps
 * @param {StatisticsProps}
 */

interface Props {
  slice: {
    primary: {
      statistics: Array<{
        label: KeyTextField;
        count: KeyTextField;
      }>;
    };
  };
}

export default function Statistics({ slice }: Props) {
  return (
    <div className="relative mt-10 lg:mt-0">
      <div className="absolute inset-x-0 bottom-0 lg:-bottom-16 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-kg grid grid-cols-2 sm:grid-cols-4">
            {slice.primary.statistics.map((item, index) => (
              <div key={index} className="flex flex-col p-4 sm:p-6 text-center">
                <dd className="text-4xl leading-[57.6px]  text-5xl font-medium leading-none text-blue">
                  {item.count}
                </dd>
                <dt className="text-base text-gray-600 font-Raleway font-medium leading-6">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
