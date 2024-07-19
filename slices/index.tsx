import dynamic from "next/dynamic";

export const components = {
  banner: dynamic(() => import("./Banner")),
  blog_post: dynamic(() => import("./BlogPost")),
  brands: dynamic(() => import("./Brands")),
  cards: dynamic(() => import("./Cards")),
  clients: dynamic(() => import("./Clients")),
  contact: dynamic(() => import("./Contact")),
  faq: dynamic(() => import("./Faq")),
  hero_section: dynamic(() => import("./HeroSection")),
  image_content_with_column: dynamic(() => import("./ImageContentWithColumn")),
  link_section: dynamic(() => import("./LinkSection")),
  menus: dynamic(() => import("./Menus")),
  project: dynamic(() => import("./Project")),
  statistics: dynamic(() => import("./Statistics")),
  whyus: dynamic(() => import("./Whyus")),
};
