// images=============================================
import { servicesImages } from "../../images/services";
import { SwipersInApp } from "../AllSwipers";

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

const dataOurServiceSwiperSlide = [
  {
    alt: "СТИЛИСТ",
    imgSrc: stilistMob,
    title: "СТИЛИСТ",
    text: "Все виды стрижек, окрашивание, создание креативного образа",
  },
  {
    alt: "НОГТЕВОЙ МАСТЕР",
    imgSrc: nogtyMob,
    title: "НОГТЕВОЙ СЕРВИС",
    text: "Маникюр, педикюр, покрытие Shellac и Blossom",
  },
  {
    alt: "ВИЗАЖИСТ",
    imgSrc: visajMob,
    title: "ВИЗАЖ",
    text: "Вечерний, свадебный, повседневный макияж",
  },
  {
    alt: "Косметолог",
    imgSrc: cosmeticsMob,
    title: "Косметология",
    text: "Эпиляция, депиляция, пилинги, уход и инъекции у проффесиональных мастеров",
  },
  {
    alt: "работы с бровями",
    imgSrc: brovyMob,
    title: "брови и ресницы",
    text: "Ухоженные брови и ресницы за 1 процедуру. Подберем уникальную форму бровей",
  },
  {
    alt: "массажист",
    imgSrc: masageMob,
    title: "массаж",
    text: "Классический, расслабляющий, спортивный и другие виды, а так же эндосфера",
  },
  {
    alt: "солярий",
    imgSrc: solariyMob,
    title: "солярий",
    text: "Подготивоться к отпуску или восполнить недостаток витамина D",
  },
  {
    alt: "мастер перманентного макияжа",
    imgSrc: permanentMob,
    title: "перманентный макияж",
    text: "Подчеркнем привлекательные черты или скроем недостатки",
  },
];
const title = "УСЛУГИ";

const OurService = () => {
  return (
    <SwipersInApp.CubeSwiper
      withBtn
      btnTitle="получить скидку 20% на первый визит"
      data={dataOurServiceSwiperSlide}
      title={title}
      elClass="ServiceCard"
    />
  );
};

export default OurService;
