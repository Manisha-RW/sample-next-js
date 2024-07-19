import { SliceZone } from "@prismicio/react";
<<<<<<< HEAD
import { createClient } from "../prismicio";
import { components } from "../slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
export async function generateMetadata() {
  const baseUrl = "http://localhost:3000";
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    alternates: {
      canonical: page?.data?.canonicalLink?.url || `${baseUrl}${page.url}`,
    },
    title: page?.data?.meta_title || page?.og_title || "",
    description: page?.data?.meta_description || page?.og_description || "",
    openGraph: {
      title: page?.data?.og_title || page?.meta_title || "",
      description:
        page?.data?.og_description || page?.data?.meta_description || "",
      images: page?.data?.og_image.url || page?.data?.meta_image.url || "",
    },
    twitter: {
      title: page?.data?.og_title || page?.data?.meta_title || "",
      description:
        page?.data?.og_description || page?.data?.meta_description || "",
      images: page?.data?.og_image.url || page?.data?.meta_image.url || "",
    },
  };
=======

import { createClient } from "../prismicio";
import { components } from "../slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />;
    </>
  )
   
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}