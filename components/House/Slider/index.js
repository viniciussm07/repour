import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, EffectCoverflow, Thumbs } from "swiper/modules";
import { SliderData } from "./SliderData";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = SliderData;
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        style={{
          "--swiper-navigation-color": "#B91C1C",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        slidesPerView={1}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        grabCursor={true}
        modules={[FreeMode, Navigation, EffectCoverflow, Thumbs]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <Image
              className="block w-full h-full object-cover"
              sizes="(max-width: 900px) 90vw,
                90vw"
              src={slide.image}
              alt={slide.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        direction="horizontal"
        spaceBetween={0}
        slidesPerView={1}
        freeMode={true}
        noSwiping={true}
        noSwipingClass="swiper-slide"
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperDescription"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="flex items-center">
            <h3 className="text-center text-2xl md:text-3xl mt-8 pt-6">{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
