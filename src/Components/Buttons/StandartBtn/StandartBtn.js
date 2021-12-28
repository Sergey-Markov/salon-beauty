import { CommunButton } from "..";
import s from "./standartBtn.module.css";

//передаем через пропсы текст кнопки
export default function StandartBtn({
  children,
  className,
  onClick,
  arialabel,
}) {
  return (
    <CommunButton
      type="button"
      aria-label={arialabel}
      className={s.btn + " " + className}
      onClick={onClick}
    >
      {children}
    </CommunButton>
  );
}
