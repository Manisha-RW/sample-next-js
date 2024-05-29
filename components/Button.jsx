import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="bg-default-blue font-Raleway text-base py-2 px-6 text-base mt-4 lg:mt-0 w-[194px] h-[52px] rounded">
      <Link href="/">
        Explore Products
      </Link>
    </div>
  );
};

export default Button;