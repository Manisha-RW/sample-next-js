import React from "react";
import { createClient } from "../../../prismicio";
import { notFound } from "next/navigation";
import BlogPost from "../../../slices/BlogPost";
import Pagination from "../../../components/MoreInfo/Pagination";
import { components } from "../../../slices";
import { SliceZone } from "@prismicio/react";

const POSTS_PER_PAGE = 6;

export default async function BlogsPage({ params }) {
  const slug = params.slug || [];
  const currentPage = slug?.length > 1 ? parseInt(slug[1], 10) : 1;

  // Check if currentPage is a valid number
  if (isNaN(currentPage)) {
    return notFound();
  }

  const client = createClient();
  const pages = await client.getSingle("blog");
  try {
    const response = await client.getAllByType("blogPost", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    });

    if (!response || response?.length === 0) {
      return notFound();
    }

    const totalPosts = response?.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    if (currentPage > totalPages || currentPage < 1) {
      return notFound();
    }

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = response.slice(
      startIndex,
      startIndex + POSTS_PER_PAGE
    );
    return (
      <div>
        <SliceZone slices={pages?.data?.slices} components={components} />;
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <h1 className="mb-3 pb-4 text-4xl flex justify-center font-bold text-default-blue  md:text-4xl">
            Blog Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {paginatedPosts?.map((blogPost) => (
              <BlogPost
                key={blogPost?.id}
                uid={blogPost?.uid}
                slice={{
                  primary: {
                    blogImg: blogPost?.data?.featuredImg,
                    blogTitle: blogPost?.data?.title,
                    blogDesc: blogPost?.data?.shortDesc,
                  },
                }}
              />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return notFound();
  }
}

export async function generateMetadata() {
  const baseUrl = "http://localhost:3000";
  const client = createClient();
  const pages = await client.getSingle("blog");

  return {
    alternates: {
      canonical: pages?.data?.canonicalLink?.url || `${baseUrl}/${pages?.uid}`,
    },
    title: pages?.data?.meta_title || pages?.og_title || "",
    description: pages?.data?.meta_description || pages?.og_description || "",
    openGraph: {
      title: pages?.data?.og_title || pages?.meta_title || "",
      description:
        pages?.data?.og_description || pages?.data?.meta_description || "",
      images: pages?.data?.og_image?.url || pages?.data?.meta_image?.url || "",
    },
    twitter: {
      title: pages?.data?.og_title || pages?.data?.meta_title || "",
      description:
        pages?.data?.og_description || pages?.data?.meta_description || "",
      images: pages?.data?.og_image?.url || pages?.data?.meta_image?.url || "",
    },
  };
}
