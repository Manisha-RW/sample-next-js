/**
 * @typedef {import("@prismicio/client").Content.LinkSectionSlice} LinkSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinkSectionSlice>} LinkSectionProps
 * @param {LinkSectionProps}
 */
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
        {slice?.primary?.heading}
      </h4>
      <ul>
        {slice?.primary?.links?.map((item, index) => (
          <li
            key={index}
            className="mb-6 font-raleway text-gray-400 font-normal text-sm"
          >
            <PrismicNextLink field={item?.link}>
              {item?.linkLabel}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
