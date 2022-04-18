// images=============================================
import { useEffect } from "react";
import useResizeAware from "react-resize-aware";
import { servicesImages } from "../../images/services";
import { SwipersInApp } from "../AllSwipers";
import TabServiceSwiper from "../AllSwipers/TabServiceSwiper/TabServiceSwiper";

const {
  stilistMob,
  nogtyMob,
  visajMob,
  cosmeticsMob,
  masageMob,
  brovyMob,
  solariyMob,
  permanentMob,
} = servicesImages;

const data = [
  {
    alt: "СТИЛИСТ",
    src: stilistMob,
    title: "СТИЛИСТ",
    text: "Все виды стрижек, окрашивание, создание креативного образа",
  },
  {
    alt: "НОГТЕВОЙ МАСТЕР",
    src: nogtyMob,
    title: "НОГТЕВОЙ СЕРВИС",
    text: "Маникюр, педикюр, покрытие Shellac и Blossom",
  },
  {
    alt: "ВИЗАЖИСТ",
    src: visajMob,
    title: "ВИЗАЖ",
    text: "Вечерний, свадебный, повседневный макияж",
  },
  {
    alt: "Косметолог",
    src: cosmeticsMob,
    title: "Косметология",
    text: "Эпиляция, депиляция, пилинги, уход и инъекции у проффесиональных мастеров",
  },
  {
    alt: "работы с бровями",
    src: brovyMob,
    title: "брови и ресницы",
    text: "Ухоженные брови и ресницы за 1 процедуру. Подберем уникальную форму бровей",
  },
  {
    alt: "массажист",
    src: masageMob,
    title: "массаж",
    text: "Классический, расслабляющий, спортивный и другие виды, а так же эндосфера",
  },
  {
    alt: "солярий",
    src: solariyMob,
    title: "солярий",
    text: "Подготивоться к отпуску или восполнить недостаток витамина D",
  },
  {
    alt: "мастер перманентного макияжа",
    src: permanentMob,
    title: "перманентный макияж",
    text: "Подчеркнем привлекательные черты или скроем недостатки",
  },
];
const title = "УСЛУГИ";
const classNames = {
  imgBox: "Service-imgBox",
  tumb: "Service-tumb",
};

const OurService = () => {
  const [resizeListener, sizes] = useResizeAware();

  if (sizes.width <= 639) {
    return (
      <div>
        {resizeListener}
        <SwipersInApp.CubeSwiper
          withBtn
          btnTitle="получить скидку 20% на первый визит"
          data={data}
          title={title}
          elClass="ServiceCard"
        />
      </div>
    );
  }
  if (sizes.width >= 1600) {
    return (
      <div>
        {resizeListener}
        <p>New Block</p>
      </div>
    );
  }
  if (640 <= sizes.width <= 1599) {
    return (
      <div>
        {resizeListener}
        <SwipersInApp.TabServiceSwiper
          data={data}
          classNames={classNames}
          withBtn
          btnTitle="получить скидку 20% на первый визит"
          title={title}
        />
      </div>
    );
  }
};

export default OurService;
