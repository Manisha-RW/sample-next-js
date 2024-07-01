import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Cards`.
 */
export type CardsProps = SliceComponentProps<Content.CardsSlice>;

/**
 * Component for "Cards" Slices.
 */
const Cards = ({ slice }: CardsProps): JSX.Element => {
  return (
    <>
      {slice?.variation == "default" && (
        <section className="py-10" id="services">
          <div className="container mx-auto lg:px-32">
            <h3 className="font-raleway font-semibold text-center text-2xl md:text-3xl lg:text-4xl leading-snug text-left mb-6">
              {slice?.primary?.title1}
              <span className="text-default-blue font-raleway">
                {" "}
                {slice?.primary?.title2}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cards */}
              {slice?.primary?.cardData?.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  {card?.cardVideo?.embed_url ? (
                    <iframe
                      height="260px"
                      width="404px"
                      src={card?.cardVideo?.embed_url}
                    ></iframe>
                  ) : (
                    // <div
                    //   className="w-full h-64 object-cover"
                    //   // dangerouslySetInnerHTML={{
                    //   //   __html: card?.cardVideo?.html || "",
                    //   // }}
                    // />
                    card?.cardImage?.url && (
                      <PrismicNextImage
                        className="w-full h-64 object-cover"
                        field={card?.cardImage}
                        alt={card?.cardImage?.alt}
                      />
                    )
                  )}

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {card?.cardTitle}
                    </h3>
                    <div className="text-gray-700 text-base">
                      <PrismicRichText field={card?.cardDesc} />{" "}
                      {card?.moreDesc?.length > 0 && (
                        <details>
                          <summary>Read More</summary>
                          <PrismicRichText field={card?.moreDesc} />
                        </details>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {slice?.variation == "cardsWithoutText" && (
        <section className="text-gray-700 body-font" id="gallery">
          <h3 className="font-raleway mt-10 font-semibold text-center text-2xl md:text-3xl lg:text-4xl leading-snug text-left mb-6">
            {slice?.primary?.title1}
            <span className="text-default-blue font-raleway">
              {" "}
              {slice?.primary?.title2}
            </span>
          </h3>

          <div className="grid grid-cols-1 lg:px-64  place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {slice?.primary?.cardData?.map((card, index) => (
              <div key={index} className="group relative">
                <PrismicNextImage
                  className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  field={card?.imgwithouttext}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Cards;
