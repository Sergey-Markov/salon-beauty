// images=============================================
import stilist from "../../imeges/services/stilist.png";
import nogty from "../../imeges/services/nogty.png";
import visaj from "../../imeges/services/visaj.png";
import cosmetics from "../../imeges/services/cosmetics.png";
import masage from "../../imeges/services/masage.png";
import brovy from "../../imeges/services/brovy.png";
import solariy from "../../imeges/services/solariy.png";
import permanent from "../../imeges/services/permanent.png";
import { SwipersInApp } from "../AllSwipers";

const OurService = () => {
  const dataOurServiceSwiperSlide = [
    {
      alt: "СТИЛИСТ",
      imgSrc: stilist,
      title: "СТИЛИСТ",
      text: "Все виды стрижек, окрашивание, создание креативного образа",
    },
    {
      alt: "НОГТЕВОЙ МАСТЕР",
      imgSrc: nogty,
      title: "НОГТЕВОЙ СЕРВИС",
      text: "Маникюр, педикюр, покрытие Shellac и Blossom",
    },
    {
      alt: "ВИЗАЖИСТ",
      imgSrc: visaj,
      title: "ВИЗАЖ",
      text: "Вечерний, свадебный, повседневный макияж",
    },
    {
      alt: "Косметолог",
      imgSrc: cosmetics,
      title: "Косметология",
      text: "Эпиляция, депиляция, пилинги, уход и инъекции у проффесиональных мастеров",
    },
    {
      alt: "работы с бровями",
      imgSrc: brovy,
      title: "брови и ресницы",
      text: "Ухоженные брови и ресницы за 1 процедуру. Подберем уникальную форму бровей",
    },
    {
      alt: "массажист",
      imgSrc: masage,
      title: "массаж",
      text: "Классический, расслабляющий, спортивный и другие виды, а так же эндосфера",
    },
    {
      alt: "солярий",
      imgSrc: solariy,
      title: "солярий",
      text: "Подготивоться к отпуску или восполнить недостаток витамина D",
    },
    {
      alt: "мастер перманентного макияжа",
      imgSrc: permanent,
      title: "перманентный макияж",
      text: "Подчеркнем привлекательные черты или скроем недостатки",
    },
  ];
  const dataServices = { title: "УСЛУГИ", text: "Our Service" };
  return (
    <SwipersInApp.CubeSwiper
      data={dataOurServiceSwiperSlide}
      dataServices={dataServices}
    />
  );
};

export default OurService;
