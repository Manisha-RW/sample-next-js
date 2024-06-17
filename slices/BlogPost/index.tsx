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
  uid: string;
  slice: {
    primary: {
      blogImg: ImageFieldImage;
      blogTitle: string;
      blogDesc: RichTextField;
    };
  };
}
export default function BlogPost({ slice, uid }: Props) {
  return (
    <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      <a
            href={`/blogs/${uid}`}
            
          >
      <PrismicNextImage
        alt=""
        className="w-full mb-3"
        field={slice?.primary?.blogImg as ImageFieldImage}
      />
      <div className="p-4 pt-2">
        <div className="mb-4">
          <a
            href={`/blogs/${uid}`}
            className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 inline-block"
          >
            {slice?.primary?.blogTitle}
          </a>
          <PrismicRichText field={slice?.primary?.blogDesc} />
        </div>
      </div></a>
    </div>
  );
}
