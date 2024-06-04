// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | ClientsSlice
  | BrandsSlice
  | FaqSlice
  | ContactSlice
  | HeroSectionSlice
  | ImageContentWithColumnSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = HomepageDocument | PageDocument;

/**
 * Item in *Brands → Default → Primary → Brand Images*
 */
export interface BrandsSliceDefaultPrimaryBrandImagesItem {
  /**
   * Image field in *Brands → Default → Primary → Brand Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: brands.default.primary.brandImages[].Img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  Img: prismic.ImageField<never>;
}

/**
 * Primary content in *Brands → Default → Primary*
 */
export interface BrandsSliceDefaultPrimary {
  /**
   * Title1 field in *Brands → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: brands.default.primary.title1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title1: prismic.KeyTextField;

  /**
   * Title2 field in *Brands → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: brands.default.primary.title2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title2: prismic.KeyTextField;

  /**
   * Description field in *Brands → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: brands.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Brand Images field in *Brands → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: brands.default.primary.brandImages[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  brandImages: prismic.GroupField<
    Simplify<BrandsSliceDefaultPrimaryBrandImagesItem>
  >;
}

/**
 * Default variation for Brands Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BrandsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BrandsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Brands*
 */
type BrandsSliceVariation = BrandsSliceDefault;

/**
 * Brands Shared Slice
 *
 * - **API ID**: `brands`
 * - **Description**: Brands
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BrandsSlice = prismic.SharedSlice<"brands", BrandsSliceVariation>;

/**
 * Item in *Clients → Default → Primary → Client Data*
 */
export interface ClientsSliceDefaultPrimaryClientDataItem {
  /**
   * Image field in *Clients → Default → Primary → Client Data*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: clients.default.primary.clientData[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *Clients → Default → Primary → Client Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients.default.primary.clientData[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Position field in *Clients → Default → Primary → Client Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients.default.primary.clientData[].position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  position: prismic.KeyTextField;

  /**
   * Description field in *Clients → Default → Primary → Client Data*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients.default.primary.clientData[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *Clients → Default → Primary*
 */
export interface ClientsSliceDefaultPrimary {
  /**
   * Title1 field in *Clients → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients.default.primary.title1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title1: prismic.KeyTextField;

  /**
   * Title2 field in *Clients → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients.default.primary.title2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title2: prismic.KeyTextField;

  /**
   * Title3 field in *Clients → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients.default.primary.title3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title3: prismic.KeyTextField;

  /**
   * Client Data field in *Clients → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: clients.default.primary.clientData[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  clientData: prismic.GroupField<
    Simplify<ClientsSliceDefaultPrimaryClientDataItem>
  >;
}

/**
 * Default variation for Clients Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ClientsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ClientsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Clients*
 */
type ClientsSliceVariation = ClientsSliceDefault;

/**
 * Clients Shared Slice
 *
 * - **API ID**: `clients`
 * - **Description**: Clients
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ClientsSlice = prismic.SharedSlice<
  "clients",
  ClientsSliceVariation
>;

/**
 * Primary content in *Contact → Default → Primary*
 */
export interface ContactSliceDefaultPrimary {
  /**
   * Image field in *Contact → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title1 field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.title1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title1: prismic.KeyTextField;

  /**
   * Title2 field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.title2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title2: prismic.KeyTextField;

  /**
   * Description field in *Contact → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Item in *Faq → Default → Primary → Faqs*
 */
export interface FaqSliceDefaultPrimaryFaqsItem {
  /**
   * Heading field in *Faq → Default → Primary → Faqs*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.faqs[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *Faq → Default → Primary → Faqs*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.faqs[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *Faq → Default → Primary*
 */
export interface FaqSliceDefaultPrimary {
  /**
   * Title1 field in *Faq → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.title1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title1: prismic.KeyTextField;

  /**
   * Title2 field in *Faq → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.title2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title2: prismic.KeyTextField;

  /**
   * Description field in *Faq → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Faqs field in *Faq → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.default.primary.faqs[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  faqs: prismic.GroupField<Simplify<FaqSliceDefaultPrimaryFaqsItem>>;
}

/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FaqSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Faq*
 */
type FaqSliceVariation = FaqSliceDefault;

/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: Faq
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSlice = prismic.SharedSlice<"faq", FaqSliceVariation>;

/**
 * Primary content in *HeroSection → Default → Primary*
 */
export interface HeroSectionSliceDefaultPrimary {
  /**
   * BgImage field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.bgImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bgImage: prismic.ImageField<never>;

  /**
   * Heading field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * SubHeading field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.subHeading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subHeading: prismic.KeyTextField;

  /**
   * ButtonName field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.BtnName
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  BtnName: prismic.KeyTextField;

  /**
   * BtnLink field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.BtnLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  BtnLink: prismic.LinkField;
}

/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSection*
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault;

/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSlice = prismic.SharedSlice<
  "hero_section",
  HeroSectionSliceVariation
>;

/**
 * Primary content in *ImageContentWithColumn → Default → Primary*
 */
export interface ImageContentWithColumnSliceDefaultPrimary {
  /**
   * Image field in *ImageContentWithColumn → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content_with_column.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title1 field in *ImageContentWithColumn → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content_with_column.default.primary.title1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title1: prismic.KeyTextField;

  /**
   * Title2 field in *ImageContentWithColumn → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content_with_column.default.primary.title2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title2: prismic.KeyTextField;

  /**
   * Description1 field in *ImageContentWithColumn → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content_with_column.default.primary.description1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description1: prismic.RichTextField;

  /**
   * Description2 field in *ImageContentWithColumn → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_content_with_column.default.primary.description2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description2: prismic.RichTextField;
}

/**
 * Default variation for ImageContentWithColumn Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageContentWithColumnSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageContentWithColumnSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageContentWithColumn*
 */
type ImageContentWithColumnSliceVariation = ImageContentWithColumnSliceDefault;

/**
 * ImageContentWithColumn Shared Slice
 *
 * - **API ID**: `image_content_with_column`
 * - **Description**: ImageContentWithColumn
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageContentWithColumnSlice = prismic.SharedSlice<
  "image_content_with_column",
  ImageContentWithColumnSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BrandsSlice,
      BrandsSliceDefaultPrimaryBrandImagesItem,
      BrandsSliceDefaultPrimary,
      BrandsSliceVariation,
      BrandsSliceDefault,
      ClientsSlice,
      ClientsSliceDefaultPrimaryClientDataItem,
      ClientsSliceDefaultPrimary,
      ClientsSliceVariation,
      ClientsSliceDefault,
      ContactSlice,
      ContactSliceDefaultPrimary,
      ContactSliceVariation,
      ContactSliceDefault,
      FaqSlice,
      FaqSliceDefaultPrimaryFaqsItem,
      FaqSliceDefaultPrimary,
      FaqSliceVariation,
      FaqSliceDefault,
      HeroSectionSlice,
      HeroSectionSliceDefaultPrimary,
      HeroSectionSliceVariation,
      HeroSectionSliceDefault,
      ImageContentWithColumnSlice,
      ImageContentWithColumnSliceDefaultPrimary,
      ImageContentWithColumnSliceVariation,
      ImageContentWithColumnSliceDefault,
    };
  }
}
