import React from "react";
import StandartBtn from "../Buttons/StandartBtn/StandartBtn";
import { ReactComponent as HeaderIcon } from "../../imeges/svg/menu.svg";
import s from "./Header.module.css";

export default function Header() {
  return (
    <div className={s.container}>
      <p className={s.logo}>
        <span className={s.logo_s}>$</span>lon
      </p>
      <StandartBtn arialabel="menu" className={s.btn}>
        <HeaderIcon width="40" height="40" className={s.svgMenu} />
      </StandartBtn>
    </div>
  );
}
