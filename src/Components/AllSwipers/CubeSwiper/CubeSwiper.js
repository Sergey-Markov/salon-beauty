import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination } from "swiper";

// Import Swiper styles===============================
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./ourservice.css";
// styles
import "./styles.scss";

SwiperCore.use([EffectCube, Pagination]);

const CubeSwiper = ({ data, dataServices }) => {
  return (
    <div className="OurService-field">
      <h2>{dataServices.title}</h2>
      <p className="OurService-ourService">{dataServices.text}</p>
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
        className="mySwiper"
      >
        {data.map((slide) => (
          <SwiperSlide key={uuidv4()}>
            <img alt={slide.alt} src={slide.imgSrc} />
            <h3 className="OurService-title">{slide.title}</h3>
            <p>{slide.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CubeSwiper;
