import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination } from "swiper";
import { GetDiscountBtn } from "../../Buttons";
import { ServiceCard } from "../../ServiceCard";

// Import Swiper styles===============================
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./ourservice.css";
// styles
import "./styles.scss";

SwiperCore.use([EffectCube, Pagination]);

const CubeSwiper = ({ data, title, withBtn, btnTitle, elClass }) => {
  return (
    <div className="CubeSwiper-field">
      <h2 className="CubeSwiper-title">{title}</h2>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        className={elClass}
      >
        {data.map((slide) => (
          <SwiperSlide key={uuidv4()}>
            <ServiceCard slide={slide} className={elClass} />
          </SwiperSlide>
        ))}
      </Swiper>
      {withBtn && btnTitle && <GetDiscountBtn>{btnTitle}</GetDiscountBtn>}
    </div>
  );
};
export default CubeSwiper;
