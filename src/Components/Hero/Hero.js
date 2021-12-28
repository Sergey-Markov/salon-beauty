import s from "./Hero.module.css";
import im from "../../imeges/heroImg.jpg";
import { StandartBtn } from "../Buttons";

export default function Hero() {
  return (
    <div className={s.field}>
      <h1 className={s.title}>
        Салон красоты <span className={s.slon}>$lon</span>
      </h1>
      <p className={s.text}>
        Cтрижки, окрашивания, укладки, макияж, маникюр и педикюр, косметология,
        перманентный макияж, массаж, коррекция фигуры
      </p>
      <StandartBtn>получить скидку 10% на первый визит </StandartBtn>
    </div>
  );
}
