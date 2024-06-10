// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Footer → Social Data*
 */
export interface FooterDocumentDataSocialDataItem {
  /**
   * Social Image field in *Footer → Social Data*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socialData[].socialmage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  socialmage: prismic.ImageField<never>;

  /**
   * Social Link field in *Footer → Social Data*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socialData[].socialLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  socialLink: prismic.LinkField;
}

type FooterDocumentDataSlicesSlice = LinkSectionSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Logo Image field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logoImage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logoImage: prismic.ImageField<never>;

  /**
   * Logo Link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logoLink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logoLink: prismic.LinkField;

  /**
   * Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Address field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address: prismic.RichTextField;

  /**
   * Social Data field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socialData[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socialData: prismic.GroupField<Simplify<FooterDocumentDataSocialDataItem>>;

  /**
   * Copyright Text field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyrightText
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyrightText: prismic.KeyTextField;

  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | ProjectSlice
  | TopNavbarSlice
  | StatisticsSlice
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

type NavbarDocumentDataSlicesSlice = MenusSlice;

/**
 * Content for Navbar documents
 */
interface NavbarDocumentData {
  /**
   * Logo Image field in *Navbar*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.logoImg
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logoImg: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Navbar*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavbarDocumentDataSlicesSlice>;
}

/**
 * Navbar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavbarDocumentData>,
    "navbar",
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

export type AllDocumentTypes =
  | FooterDocument
  | HomepageDocument
  | NavbarDocument
  | PageDocument;

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

/**
 * Item in *LinkSection → Default → Primary → Links*
 */
export interface LinkSectionSliceDefaultPrimaryLinksItem {
  /**
   * Link Label field in *LinkSection → Default → Primary → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: link_section.default.primary.links[].linkLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkLabel: prismic.KeyTextField;

  /**
   * Link field in *LinkSection → Default → Primary → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: link_section.default.primary.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *LinkSection → Default → Primary*
 */
export interface LinkSectionSliceDefaultPrimary {
  /**
   * Heading field in *LinkSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: link_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Links field in *LinkSection → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: link_section.default.primary.links[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<LinkSectionSliceDefaultPrimaryLinksItem>>;
}

/**
 * Default variation for LinkSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LinkSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *LinkSection*
 */
type LinkSectionSliceVariation = LinkSectionSliceDefault;

/**
 * LinkSection Shared Slice
 *
 * - **API ID**: `link_section`
 * - **Description**: LinkSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkSectionSlice = prismic.SharedSlice<
  "link_section",
  LinkSectionSliceVariation
>;

/**
 * Item in *Menus → Default → Primary → ChildMenus*
 */
export interface MenusSliceDefaultPrimaryChildmenusItem {
  /**
   * MenuLabel field in *Menus → Default → Primary → ChildMenus*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menus.default.primary.childmenus[].menulabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  menulabel: prismic.KeyTextField;

  /**
   * MenuLink field in *Menus → Default → Primary → ChildMenus*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menus.default.primary.childmenus[].menulink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  menulink: prismic.LinkField;
}

/**
 * Primary content in *Menus → Default → Primary*
 */
export interface MenusSliceDefaultPrimary {
  /**
   * MenuLabel field in *Menus → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menus.default.primary.menulabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  menulabel: prismic.KeyTextField;

  /**
   * MenuLink field in *Menus → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menus.default.primary.menulink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  menulink: prismic.LinkField;

  /**
   * ChildMenus field in *Menus → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menus.default.primary.childmenus[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  childmenus: prismic.GroupField<
    Simplify<MenusSliceDefaultPrimaryChildmenusItem>
  >;
}

/**
 * Default variation for Menus Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenusSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MenusSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Menus*
 */
type MenusSliceVariation = MenusSliceDefault;

/**
 * Menus Shared Slice
 *
 * - **API ID**: `menus`
 * - **Description**: Menus
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenusSlice = prismic.SharedSlice<"menus", MenusSliceVariation>;

/**
 * Item in *Project → Default → Primary → Card Data*
 */
export interface ProjectSliceDefaultPrimaryCardDataItem {
  /**
   * CardImage field in *Project → Default → Primary → Card Data*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.cardData[].cardImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cardImage: prismic.ImageField<never>;

  /**
   * Heading field in *Project → Default → Primary → Card Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.cardData[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *Project → Default → Primary → Card Data*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.cardData[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Client Label field in *Project → Default → Primary → Card Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.cardData[].clientLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  clientLabel: prismic.KeyTextField;

  /**
   * Client Name field in *Project → Default → Primary → Card Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.cardData[].clientName
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  clientName: prismic.KeyTextField;
}

/**
 * Item in *Project → Default → Primary → Icon Images*
 */
export interface ProjectSliceDefaultPrimaryIconImagesItem {
  /**
   * Title field in *Project → Default → Primary → Icon Images*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.iconImages[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Icon Image field in *Project → Default → Primary → Icon Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.iconImages[].iconImg
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  iconImg: prismic.ImageField<never>;
}

/**
 * Primary content in *Project → Default → Primary*
 */
export interface ProjectSliceDefaultPrimary {
  /**
   * Title1 field in *Project → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.title1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title1: prismic.KeyTextField;

  /**
   * Title2 field in *Project → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.title2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title2: prismic.KeyTextField;

  /**
   * Description field in *Project → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Card Data field in *Project → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.cardData[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cardData: prismic.GroupField<
    Simplify<ProjectSliceDefaultPrimaryCardDataItem>
  >;

  /**
   * Icon Images field in *Project → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.default.primary.iconImages[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  iconImages: prismic.GroupField<
    Simplify<ProjectSliceDefaultPrimaryIconImagesItem>
  >;
}

/**
 * Default variation for Project Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Project*
 */
type ProjectSliceVariation = ProjectSliceDefault;

/**
 * Project Shared Slice
 *
 * - **API ID**: `project`
 * - **Description**: Project
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSlice = prismic.SharedSlice<
  "project",
  ProjectSliceVariation
>;

/**
 * Item in *Statistics → Default → Primary → Statistics*
 */
export interface StatisticsSliceDefaultPrimaryStatisticsItem {
  /**
   * Label field in *Statistics → Default → Primary → Statistics*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.default.primary.statistics[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Count field in *Statistics → Default → Primary → Statistics*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.default.primary.statistics[].count
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  count: prismic.KeyTextField;
}

/**
 * Primary content in *Statistics → Default → Primary*
 */
export interface StatisticsSliceDefaultPrimary {
  /**
   * Statistics field in *Statistics → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.default.primary.statistics[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  statistics: prismic.GroupField<
    Simplify<StatisticsSliceDefaultPrimaryStatisticsItem>
  >;
}

/**
 * Default variation for Statistics Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StatisticsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StatisticsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Statistics*
 */
type StatisticsSliceVariation = StatisticsSliceDefault;

/**
 * Statistics Shared Slice
 *
 * - **API ID**: `statistics`
 * - **Description**: Statistics
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StatisticsSlice = prismic.SharedSlice<
  "statistics",
  StatisticsSliceVariation
>;

/**
 * Item in *TopNavbar → Default → Primary → Navbar Data*
 */
export interface TopNavbarSliceDefaultPrimaryNavDataItem {
  /**
   * Label field in *TopNavbar → Default → Primary → Navbar Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_navbar.default.primary.navData[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *TopNavbar → Default → Primary → Navbar Data*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: top_navbar.default.primary.navData[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *TopNavbar → Default → Primary*
 */
export interface TopNavbarSliceDefaultPrimary {
  /**
   * Navbar Data field in *TopNavbar → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: top_navbar.default.primary.navData[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navData: prismic.GroupField<
    Simplify<TopNavbarSliceDefaultPrimaryNavDataItem>
  >;
}

/**
 * Default variation for TopNavbar Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopNavbarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TopNavbarSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TopNavbar*
 */
type TopNavbarSliceVariation = TopNavbarSliceDefault;

/**
 * TopNavbar Shared Slice
 *
 * - **API ID**: `top_navbar`
 * - **Description**: TopNavbar
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopNavbarSlice = prismic.SharedSlice<
  "top_navbar",
  TopNavbarSliceVariation
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
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSocialDataItem,
      FooterDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      NavbarDocument,
      NavbarDocumentData,
      NavbarDocumentDataSlicesSlice,
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
      LinkSectionSlice,
      LinkSectionSliceDefaultPrimaryLinksItem,
      LinkSectionSliceDefaultPrimary,
      LinkSectionSliceVariation,
      LinkSectionSliceDefault,
      MenusSlice,
      MenusSliceDefaultPrimaryChildmenusItem,
      MenusSliceDefaultPrimary,
      MenusSliceVariation,
      MenusSliceDefault,
      ProjectSlice,
      ProjectSliceDefaultPrimaryCardDataItem,
      ProjectSliceDefaultPrimaryIconImagesItem,
      ProjectSliceDefaultPrimary,
      ProjectSliceVariation,
      ProjectSliceDefault,
      StatisticsSlice,
      StatisticsSliceDefaultPrimaryStatisticsItem,
      StatisticsSliceDefaultPrimary,
      StatisticsSliceVariation,
      StatisticsSliceDefault,
      TopNavbarSlice,
      TopNavbarSliceDefaultPrimaryNavDataItem,
      TopNavbarSliceDefaultPrimary,
      TopNavbarSliceVariation,
      TopNavbarSliceDefault,
    };
  }
}
