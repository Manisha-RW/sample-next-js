// app/page.js

import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import FooterSlice from "../components/FooterSection/Footer";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <SliceZone
      slices={page.data.slices}
      components={{
        ...components,
        footer: FooterSlice,
      }}
    />
  );
}
