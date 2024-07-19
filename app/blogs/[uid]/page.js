import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../../../prismicio";
import { components } from "../../../slices";

export default async function BlogPostPage({ params }) {
  const { uid } = params;
  const client = createClient();

  try {
    const blogPost = await client.getByUID("blogPost", uid);

    if (!blogPost) {
      return notFound();
    }

    return (
      <>
        <div>
          <img
            src={blogPost?.data?.featuredImg?.url}
            alt={blogPost?.data?.featuredImg?.alt}
          />
          <div className="mt-10">
            <h3 className="font-raleway font-semibold text-2xl md:text-3xl flex justify-center lg:text-4xl leading-snug text-left mb-6">
              {blogPost?.data?.title}
            </h3>
            <p className="font-raleway font-semibold text-1xl md:text-2xl flex justify-center lg:text-3xl leading-snug text-left mb-6">
              By {blogPost?.data?.author}
            </p>
            <p className="font-raleway font-semibold text-1xl md:text-2xl flex justify-center lg:text-3xl leading-snug text-left mb-6">
              {new Date(blogPost?.data?.publishDate).toLocaleDateString()}
            </p>
          </div>
          <SliceZone slices={blogPost?.data?.slices} components={components} />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return notFound();
  }
}

export async function generateMetadata({ params }) {
  const { uid } = params;
  const baseUrl = "http://localhost:3000";
  const client = createClient();
  const page = await client.getByUID("blogPost", uid);

  if (!page) {
    return notFound();
  }

  return {
    alternates: {
      canonical: page?.data.canonicalLink?.url || `${baseUrl}${page?.url}`,
    },
    title: page?.data?.meta_title || page?.og_title || page?.data?.title || "",
    description: page?.data?.meta_description || page?.og_description || "",
    openGraph: {
      title:
        page?.data?.og_title ||
        page?.data?.meta_title ||
        page?.data?.title ||
        "",
      description:
        page?.data?.og_description || page?.data?.meta_description || "",
      images: page?.data?.og_image?.url || page?.data?.meta_image?.url || "",
    },
    twitter: {
      title:
        page?.data?.og_title ||
        page?.data?.meta_title ||
        page?.data?.title ||
        "",
      description:
        page?.data?.og_description || page?.data?.meta_description || "",
      images: page?.data?.og_image?.url || page?.data?.meta_image?.url || "",
    },
  };
}
