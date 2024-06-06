import { useState } from "react";
import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

interface Props {
  slice: {
    primary: {
      parentLabel: KeyTextField;
      dropdown: Array<{
        label: KeyTextField;
        link: LinkField;
      }>;
    };
  };
}

export default function DropdownItems({ slice }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative mb-4 lg:mb-0">
      <button
        className="text-white gap-3 font-Raleway text-base px-4 py-2 whitespace-nowrap  flex items-center"
        onClick={toggleDropdown}
      >
        {slice.primary.parentLabel}
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
      </button>
      {showDropdown && (
        <div className="absolute bg-white top-full left-0 mt-2 py-2 rounded-lg shadow-lg">
          {slice.primary.dropdown.map((item, index) => (
            <PrismicNextLink
              key={index}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              field={item.link}
            >
              {item.label}
            </PrismicNextLink>
          ))}
        </div>
      )}
    </div>
  );
}
