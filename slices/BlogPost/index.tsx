"use client";
import {
  Content,
  ImageFieldImage,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogPost`.
 */
export type BlogPostProps = SliceComponentProps<Content.BlogPostSlice>;

/**
 * Component for "BlogPost" Slices.
 */

interface Props {
  slice: {
    primary: {
      blogImg: ImageFieldImage;
      blogTitle: string; 
      blogDesc: RichTextField;
    };
  };
}
export default function BlogPost({ slice }: Props) {
  console.log("DATA", slice);
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          {/* <img
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
          className="w-full mb-3"
        /> */}
          <PrismicNextImage
            className="w-full mb-3"
            field={slice?.primary?.blogImg as ImageFieldImage}
          />
          <div className="p-4 pt-2">
            <div className="mb-4">
              <a
                href="#"
                className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 inline-block"
              >
                {slice?.primary?.blogTitle}
              </a>
              {/* <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p> */}
              <PrismicRichText field={slice?.primary?.blogDesc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
