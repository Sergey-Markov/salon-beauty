import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ServiceCard from "../../ServiceCard/ServiceCard";
import { GetDiscountBtn } from "../../Buttons";

import "./TabServiceSwiper.scss";
import "swiper/css";
import "swiper/css/effect-cards";

const TabServiceSwiper = ({ data, title, withBtn, btnTitle }) => {
  return (
    <div className="ServiceCardTab-field">
      <h2 className="ServiceCardTab-title">{title}</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={42}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="ServiceCardTab"
      >
        {data.map((el) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <ServiceCard slide={el} className={"ServiceCardTab"} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {withBtn && btnTitle && <GetDiscountBtn>{btnTitle}</GetDiscountBtn>}
    </div>
  );
};
export default TabServiceSwiper;
