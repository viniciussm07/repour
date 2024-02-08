import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { SliderData } from "./SliderData";
import Image from "next/image";
import {RxArrowLeftSLine, RxArrowRightSLine} from "react-icons/rx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

function Slider() {
  const slides = SliderData;
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          }
        }}
        modules={[FreeMode, Pagination]}
        freeMode={true}
        pagination={{clickable: true}}
        className="max-w-7xl w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <Image src={slide.image} alt={slide.title} />
            <div className="flex items-center justify-center flex-col">
              <h3 className="text-3xl py-6">{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
