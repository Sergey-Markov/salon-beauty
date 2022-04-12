import CarIcon from "../../imeges/svg/Car.svg";
import FirstAidIcon from "../../imeges/svg/FirstAid.svg";
import TrainIcon from "../../imeges/svg/Train.svg";

import "./Benefits.scss";

const data = [
  {
    text: "5 мин. от метро митино",
    imgSvg: TrainIcon,
  },
  {
    text: "медицинская лицензия",
    imgSvg: FirstAidIcon,
  },
  {
    text: "бесплатная парковка",
    imgSvg: CarIcon,
  },
];
const Benefits = () => {
  return (
    <ul className="Benefits-list">
      {data.map((el) => (
        <li className="Benefits-item">
          <div className="Benefits-img-field">
            <img
              src={el.imgSvg}
              width="90"
              height="90"
              className="Benefits-img-svg"
            />
          </div>
          <p className="Benefits-text">{el.text}</p>
        </li>
      ))}
    </ul>
  );
};
export default Benefits;
