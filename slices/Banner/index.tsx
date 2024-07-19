<<<<<<< HEAD
import {
  Content,
  ImageFieldImage,
  KeyTextField,
  LinkField,
} from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
=======
// components/Banner.tsx
import { Content, KeyTextField } from "@prismicio/client";
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
import { SliceComponentProps } from "@prismicio/react";

export type BannerProps = SliceComponentProps<Content.BannerSlice>;

interface Props {
  slice: {
    primary: {
      title: KeyTextField;
<<<<<<< HEAD
      title2: KeyTextField;
      subTitle: KeyTextField;
      buttons: Array<{
        buttonLabel: KeyTextField;
        buttonLink: LinkField;
      }>;
      bannerImg: ImageFieldImage;
    };
    variation: string;
=======
      subTitle: KeyTextField;
    
    };
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
  };
}

const Banner = ({ slice }: Props) => {
  return (
    <section className="relative bg-gradient-to-r from-slate-300 to-slate-500">
<<<<<<< HEAD
      {slice?.variation == "default" && (
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-[720px]">
              <h1 className="mb-3 pb-4 text-4xl font-bold text-default-blue md:text-6xl">
                {slice?.primary?.title}
              </h1>
              <p className="mb-6 max-w-[528px] text-xl md:mb-10">
                {slice?.primary?.subTitle}
              </p>
              <div className="flex items-center">
                {slice?.primary?.buttons?.map((item, index) => (
                  <a
                    key={index}
                    className="mr-5 inline-block rounded-full bg-light-blue px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
                  >
                    <PrismicNextLink field={item?.buttonLink}>
                      {item?.buttonLabel}
                    </PrismicNextLink>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <PrismicNextImage field={slice?.primary.bannerImg} />
            </div>
          </div>
        </div>
      )}

      {slice?.variation == "shortBanner" && (
        <div className="relative w-full h-[420px]" id="home">
          <div className="absolute inset-0 opacity-70">
            <PrismicNextImage
              className="object-cover object-center w-full h-full"
              field={slice?.primary?.bannerImg}
              alt={(slice?.primary?.bannerImg?.alt || "") as ""}
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:ml-[20%] vsm:mt-[90px] mb-4 md:mb-0">
              <h2 className="font-raleway text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug text-left mb-6">
                {slice?.primary?.title}
                <span className="text-default-blue font-raleway">
                  {" "}
                  {slice?.primary?.title2}
                </span>
              </h2>
              <p className="font-regular text-xl mb-8 mt-4">
                {slice?.primary?.subTitle}
              </p>
              {slice?.primary?.buttons?.map((item, index) => (
                <a
                  key={index}
                  className="mr-5 inline-block rounded-full bg-light-blue px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
                >
                  <PrismicNextLink field={item?.buttonLink}>
                    {item?.buttonLabel}
                  </PrismicNextLink>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
=======
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-[720px]">
            <h1 className="mb-3 pb-4 text-4xl font-bold text-default-blue md:text-6xl">
              {slice?.primary?.title}
            </h1>
            <p className="mb-6 max-w-[528px] text-xl md:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="mr-5 inline-block rounded-full bg-light-blue px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
              >
                Let's Talk
              </a>
              <a
                href="#"
                className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold"
              >
                <p className="">View Showreel</p>
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
              alt=""
              className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
    </section>
  );
};

export default Banner;
