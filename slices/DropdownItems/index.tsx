import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DropdownItems`.
 */
export type DropdownItemsProps =
  SliceComponentProps<Content.DropdownItemsSlice>;

/**
 * Component for "DropdownItems" Slices.
 */
const DropdownItems = ({ slice }: DropdownItemsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for dropdown_items (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DropdownItems;
