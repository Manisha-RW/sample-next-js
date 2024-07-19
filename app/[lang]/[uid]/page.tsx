import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../../../prismicio";
import { components } from "../../../slices";
type Params = { uid: string; lang: string,  };

export default async function Page({ params: { lang, uid } }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", uid, { lang: lang })
    .catch(() => notFound());
    console.log("Heuuu", lang)
  return (
    <>   
      <SliceZone  slices={page?.data?.slices} components={components} />
      {page?.data?.title}
     
    </>
  );
}

export async function generateMetadata({
  params: { lang, uid },
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", uid, { lang: lang })
    .catch(() => notFound());

  return {
    title: page?.data?.meta_title,
    description: page?.data?.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page", { lang: '*' });

  return pages.map(({ uid, lang }) => ({ uid: uid, lang: lang }));
}
