/**
 * @typedef {import("@prismicio/client").Content.LinkSectionSlice} LinkSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinkSectionSlice>} LinkSectionProps
 * @param {LinkSectionProps}
 */
const LinkSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for link_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LinkSection;
