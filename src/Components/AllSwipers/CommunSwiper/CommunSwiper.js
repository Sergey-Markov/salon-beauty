import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

const CommunSwiper = ({ data, className }) => {
  return (
    <Swiper
      modules={[EffectFade]}
      effect="cards"
      grabCursor={true}
      navigation
      pagination={{
        clickable: true,
      }}
      spaceBetween={0}
    >
      {data.map(({ src, alt }) => {
        return (
          <SwiperSlide>
            <img src={src} alt={alt} className={className} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default CommunSwiper;
