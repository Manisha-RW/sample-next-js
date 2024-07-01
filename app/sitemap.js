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

  const baseUrl = "https://oasis-ebon.vercel.app";
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
