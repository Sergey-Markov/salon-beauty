import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination } from "swiper";
// images=============================================
import stilist from "../../imeges/services/stilist.png";
import nogty from "../../imeges/services/nogty.png";
import visaj from "../../imeges/services/visaj.png";
import cosmetics from "../../imeges/services/cosmetics.png";
import masage from "../../imeges/services/masage.png";
import brovy from "../../imeges/services/brovy.png";
import solariy from "../../imeges/services/solariy.png";
import permanent from "../../imeges/services/permanent.png";

import s from "./OurService.module.css";
// Import Swiper styles===============================
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./ourservice.css";

SwiperCore.use([EffectCube, Pagination]);

export default function OurService() {
  return (
    <div className={s.field}>
      <h2>УСЛУГИ</h2>
      <p className={s.ourService}>Our Service</p>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        spaceBetween={0}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="СТИЛИСТ" src={stilist} />
          <h3 className={s.title}>СТИЛИСТ</h3>
          <p>Все виды стрижек, окрашивание, создание креативного образа</p>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="НОГТЕВОЙ МАСТЕР" src={nogty} />
          <h3 className={s.title}>НОГТЕВОЙ СЕРВИС</h3>
          <p>Маникюр, педикюр, покрытие Shellac и Blossom</p>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="ВИЗАЖИСТ" src={visaj} />
          <h3 className={s.title}>ВИЗАЖ</h3>
          <p>Вечерний, свадебный, повседневный макияж </p>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="Косметолог" src={cosmetics} />
          <h3 className={s.title}>Косметология</h3>
          <p>
            Эпиляция, депиляция, пилинги, уход и инъекции у проффесиональных
            мастеров
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="работы с бровями" src={brovy} />
          <h3 className={s.title}>брови и ресницы</h3>
          <p>
            Ухоженные брови и ресницы за 1 процедуру. Подберем уникальную форму
            бровей
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="массажист" src={masage} />
          <h3 className={s.title}>массаж</h3>
          <p>
            Классический, расслабляющий, спортивный и другие виды, а так же
            эндосфера
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="солярий" src={solariy} />
          <h3 className={s.title}>солярий</h3>
          <p>Подготивоться к отпуску или восполнить недостаток витамина D</p>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="мастер перманентного макияжа" src={permanent} />
          <h3 className={s.title}>перманентный макияж</h3>
          <p>Подчеркнем привлекательные черты или скроем недостатки</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
