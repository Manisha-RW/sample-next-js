/**
 * @typedef {import("@prismicio/client").Content.LinkSectionSlice} LinkSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinkSectionSlice>} LinkSectionProps
 * @param {LinkSectionProps}
 */
<<<<<<< HEAD

=======
// "use client";
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

interface Props {
  slice: {
    primary: {
      heading: KeyTextField;
      links: Array<{
        linkLabel: KeyTextField;
        link: LinkField;
      }>;
    };
  };
}

export default function LinkSection({ slice }: Props) {
  return (
    <div className="lg:mx-auto text-left text-white">
      <h4 className="text-base mb-5 font-semibold font-raleway mb-7">
<<<<<<< HEAD
        {slice?.primary?.heading}
      </h4>
      <ul>
        {slice?.primary?.links?.map((item, index) => (
=======
        {slice.primary.heading}
      </h4>
      <ul>
        {slice.primary.links.map((item, index) => (
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
          <li
            key={index}
            className="mb-6 font-raleway text-gray-400 font-normal text-sm"
          >
<<<<<<< HEAD
            <PrismicNextLink field={item?.link}>
              {item?.linkLabel}
=======
            <PrismicNextLink field={item.link}>
              {item.linkLabel}
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
