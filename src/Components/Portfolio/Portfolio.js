import brows from "../../imeges/portfolio/brows.jpeg";
import longHeir from "../../imeges/portfolio/longHeir.png";
import manicure from "../../imeges/portfolio/manicure.jpeg";

import { SwipersInApp } from "../AllSwipers";

import "./Portfolio.scss";

const images = [
  {
    src: brows,
    alt: "brows",
  },
  {
    src: longHeir,
    alt: "longHeir",
  },
  {
    src: manicure,
    alt: "manicure",
  },
];
const Portfolio = () => {
  return (
    <div className="Portfolio">
      <SwipersInApp.CommunSwiper data={images} className="Portfolio-img" />
    </div>
  );
};
export default Portfolio;
