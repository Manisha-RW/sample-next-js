"use client";
import { PrismicNextImage } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import {
  KeyTextField,
  ImageFieldImage,
  LinkField,
  isFilled,
} from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
// import Button from "../../components/Elements/Button";
import Link from "next/link";

interface Props {
  slice: {
    primary: {
      bgImage: ImageFieldImage[];
      heading: KeyTextField;
      subHeading: KeyTextField;
      BtnName: string;
      BtnLink: LinkField;
    };
  };
}

const getLinkUrl = (linkField: LinkField): string => {
  if (isFilled.link(linkField) && linkField.link_type === "Web") {
    return linkField.url;
  }
  return "#";
};

export default function HeroSection({ slice }: Props) {
  const [btnLinkUrl, setBtnLinkUrl] = useState<string>("#");

  useEffect(() => {
    setBtnLinkUrl(getLinkUrl(slice?.primary?.BtnLink));
  }, [slice?.primary?.BtnLink]);

  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <PrismicNextImage
          alt=""
          field={slice?.primary?.bgImage as ImageFieldImage}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 lg:px-0">
        <h1 className="lg:max-w-[689px] font-semibold font-Raleway lg:max-h-[140px] text-[32px] lg:text-[64px] leading-tight mb-4">
          {slice?.primary?.heading}
        </h1>
        <p className="text-base font-Raleway lg:max-w-[613px] lg:max-h-[48px] py-5 leading-6 mb-8">
          {slice?.primary?.subHeading}
        </p>
        <Link href={btnLinkUrl}>
          <PrismicNextLink field={slice?.primary?.BtnLink}>
            {slice?.primary?.BtnName}
          </PrismicNextLink>
        </Link>
      </div>
    </div>
  );
}
