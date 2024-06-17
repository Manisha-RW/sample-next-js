import React from "react";
import Link from "next/link";

const Pagination = ({ currentPage, totalPages }) => {
  const pagesToShow = 1;

  // Calculating the range of page numbers to display
  const rangeStart = Math.max(1, currentPage - pagesToShow);
  const rangeEnd = Math.min(totalPages, currentPage + pagesToShow);

  const generatePageLinks = () => {
    const links = [];

    // Shows First link
    if (rangeStart > 1) {
      links.push(
        <Link legacyBehavior key={1} href={`/blogs/page/1`} passHref>
          <a className="rounded-lg border px-4 py-2 border-default-blue text-gray-700">
            1
          </a>
        </Link>
      );
      if (rangeStart > 2) {
        links.push(
          <span key="dots1" className="px-3 py-2">
            ...
          </span>
        );
      }
    }

    // Generating page links within this range
    for (let page = rangeStart; page <= rangeEnd; page++) {
      links.push(
        <Link legacyBehavior key={page} href={`/blogs/page/${page}`} passHref>
          <a
            className={`rounded-lg border px-4 py-2 ${currentPage === page ? "bg-default-blue text-white" : "border-default-blue text-gray-700"}`}
          >
            {page}
          </a>
        </Link>
      );
    }

    // Shows Last link
    if (rangeEnd < totalPages) {
      if (rangeEnd < totalPages - 1) {
        links.push(
          <span key="dots2" className="px-3 py-2">
            ...
          </span>
        );
      }
      links.push(
        <Link
          legacyBehavior
          key={totalPages}
          href={`/blogs/page/${totalPages}`}
          passHref
        >
          <a className="rounded-lg border px-4 py-2 border-default-blue text-gray-700">
            {totalPages}
          </a>
        </Link>
      );
    }

    return links;
  };

  return (
    <nav
      className="mb-4 flex mt-10 justify-center space-x-4"
      aria-label="Pagination"
    >
      {currentPage > 1 && (
        <Link legacyBehavior href={`/blogs/page/${currentPage - 1}`} passHref>
          <a className="rounded-lg border border-default-blue px-2 py-2 text-gray-700">
            <span className="sr-only">Previous</span>
            <svg
              className="mt-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
      )}

      {generatePageLinks()}

      {currentPage < totalPages && (
        <Link legacyBehavior href={`/blogs/page/${currentPage + 1}`} passHref>
          <a className="rounded-lg border border-default-blue px-2 py-2 text-gray-700">
            <span className="sr-only">Next</span>
            <svg
              className="mt-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
