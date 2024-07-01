import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Whyus`.
 */
export type WhyusProps = SliceComponentProps<Content.WhyusSlice>;

/**
 * Component for "Whyus" Slices.
 */
const Whyus = ({ slice }: WhyusProps): JSX.Element => {
  return (
    <section className="text-gray-700 body-font mt-10">
      <h3 className="font-raleway font-semibold text-center text-2xl md:text-3xl lg:text-4xl leading-snug text-left mb-6">
        {slice?.primary?.title1}
        <span className="text-default-blue font-raleway">
          {" "}
          {slice?.primary?.title2}
        </span>
      </h3>
      <div className="container lg:px-[5.25rem] py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          {slice?.primary?.iconsData?.map((icons, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <PrismicNextImage
                    className="w-32 mb-3"
                    field={icons?.iconImage}
                    alt={icons?.iconImage?.alt}
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  {icons?.iconTitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyus;
