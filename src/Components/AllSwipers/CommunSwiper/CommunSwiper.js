import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import PortfolioCard from "../../PortfolioCard/PortfolioCard";

import "swiper/css";
import "swiper/css/effect-cards";

const CommunSwiper = ({ data, classNames }) => {
  return (
    <Swiper
      slidesPerView={2}
      centeredSlides={true}
      spaceBetween={12}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="Portfolio"
    >
      {data.map((el) => {
        return (
          <SwiperSlide key={uuidv4()}>
            <PortfolioCard classNames={classNames} src={el.src} alt={el.alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default CommunSwiper;
