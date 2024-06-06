import React from "react";
import Link from "next/link";

const Button = ({ href, children }) => {
  return (
    <button className="bg-default-blue font-Raleway text-base rounded h-[52px] py-2 px-4 lg:px-6 lg:py-3 mt-4 lg:mt-0">
      <Link legacyBehavior href={href}>
        {children}
      </Link>
    </button>
  );
};

export default Button;
