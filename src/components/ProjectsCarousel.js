"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ProjectsCarousel({ slides, project }) {
  const settings = {
    // dots: true,
    arrows: true,
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // hoverPause: true,
    speed: 700,
    // desktop first approach
    slidesToShow: 3,
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
        {slides.map(({ type, name }, index) => {
          if(["png", 'jpg', 'jpeg'].includes(type)) {
            return (
              <div key={index} className="px-2">
                <div>
                  <Image
                    alt=""
                    src={`/images/projects/${project.toLowerCase()}/${name}.${type}`}
                    width="400"
                    height="507"
                  />
                </div>
              </div>
            )
          } else if(type === "mp4") {
            return (
              <div key={index} className="px-2">
                <video
                  src={`/images/projects/${project.toLowerCase()}/${name}.${type}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
            )
          }
        })}
      </Slider>
    </div>
  );
}
