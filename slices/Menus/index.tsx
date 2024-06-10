import { Content, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";

/**
 * Props for `Menus`.
 */
export type MenusProps = SliceComponentProps<Content.MenusSlice>;

// interface Props {
//   slice: {
//     primary: {
//       menulabel: KeyTextField;
//       menulink: LinkField;
//       childmenus: Array<{
//         menulabel: KeyTextField;
//         menulink: LinkField;
//       }>;
//     };
//   };
// }

export default function Menus({ slice }: MenusProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const hasChildMenus = slice.primary.childmenus && slice.primary.childmenus.length > 0;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative mb-4 lg:mb-0">
      <button className="text-white gap-3 font-Raleway text-base px-4 py-2 whitespace-nowrap flex items-center" onClick={toggleDropdown}>
        <PrismicNextLink field={slice.primary.menulink}>
          {slice.primary.menulabel}
        </PrismicNextLink>

        {hasChildMenus && (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {hasChildMenus && isDropdownOpen && (
        <div className="absolute bg-white top-full left-0 mt-2 py-2 rounded-lg shadow-lg">
          {slice.primary.childmenus.map((item: any, index: any) => (
            <PrismicNextLink
              key={index}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              field={item.menulink}
            >
              {item.menulabel}
            </PrismicNextLink>
          ))}
        </div>
      )}
    </div>
  );
}