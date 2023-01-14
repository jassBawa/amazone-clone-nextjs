import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image
            loading="lazy"
            src="/unsplash_one.jpeg"
            // layout="fill"
            width={1200}
            height={600}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="/unsplash_two.jpeg"
            width={1200}
            height={600}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="/unsplash_three.jpeg"
            width={1200}
            height={600}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
