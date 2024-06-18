import { createClient } from "../prismicio";

export default async function sitemap({ params }) {
  const { uid } = params || ["heyy"];
  const client = createClient();
  const response = await client.getAllByType("blogPost", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  }); 

  const page = await client.getSingle("homepage");

//   const blogs = await client.getByUID('blogPost', uid);

  const baseUrl = "https://oasis-ebon.vercel.app";

//   console.log("DATA", blogs);
  return [
    {
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },
    ...response.map((items) => ({
      url: `${baseUrl}${items.url}`,
      lastModified: new Date(),
    })),
  ];
}
