"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ProjectsCarousel({ slides}) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // hoverPause: true,
    speed: 700,
    // desktop first approach
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map(({ type, name }, index) => (
          type === "image" && (
            <div key={index} className="px-2">
              <div className="md:hidden">
                <Image
                  alt=""
                  src={`/images/projects/mobile/${name}.png`}
                  width="343"
                  height="240"
                  className="w-full"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  alt=""
                  src={`/images/projects/desktop/${name}.png`}
                  width="1014"
                  height="1470"
                />
              </div>
            </div>
          )
        ))}
      </Slider>
    </div>
  );
}
