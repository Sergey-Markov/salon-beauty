import { v4 as uuidv4 } from "uuid";

import CarIcon from "../../imeges/svg/Car.svg";
import FirstAidIcon from "../../imeges/svg/FirstAid.svg";
import TrainIcon from "../../imeges/svg/Train.svg";

import "./Benefits.scss";

const data = [
  {
    alt: "метро",
    text: "5 мин. от метро митино",
    imgSvg: TrainIcon,
  },
  {
    alt: "лицензия",
    text: "медицинская лицензия",
    imgSvg: FirstAidIcon,
  },
  {
    alt: "парковка",
    text: "бесплатная парковка",
    imgSvg: CarIcon,
  },
];
const Benefits = () => {
  return (
    <ul className="Benefits">
      {data.map((el) => (
        <li className="Benefits-item" key={uuidv4()}>
          <div className="Benefits-img-field">
            <img src={el.imgSvg} className="Benefits-img-svg" alt={el.alt} />
          </div>
          <p className="Benefits-text">{el.text}</p>
        </li>
      ))}
    </ul>
  );
};
export default Benefits;
