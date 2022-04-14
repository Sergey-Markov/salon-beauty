import { GetDiscountBtn } from "../Buttons";
import "./index.scss";

export default function Hero() {
  return (
    <div className="Hero-field">
      <h1 className="Hero-title">
        Салон красоты <span className="Hero-slon">$lon</span>
      </h1>
      <p className="Hero-text">
        Cтрижки, окрашивания, укладки, макияж, маникюр и педикюр, косметология,
        перманентный макияж, массаж, коррекция фигуры
      </p>

      <GetDiscountBtn>получить скидку 20% на первый визит</GetDiscountBtn>
    </div>
  );
}
