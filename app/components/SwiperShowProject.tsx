import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/global.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function App({ images }: any) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        style={{paddingTop: "30px",cursor: "pointer"}}
      >
        {images.map((imgObj) => (
          <SwiperSlide key={imgObj.id}>
            <Image
              src={imgObj.image}
              alt={imgObj}
              className="w-full h-[300px] md:h-auto p-0 md:p-10 lg:p-16"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
