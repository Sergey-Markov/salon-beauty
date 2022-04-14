import { portfolioImages } from "../../images/portfolio";

import { SwipersInApp } from "../AllSwipers";

import "./Portfolio.scss";

const { browsMob, longHeirMob, manicureMob } = portfolioImages;
const images = [
  {
    src: browsMob,
    alt: "brows",
  },
  {
    src: longHeirMob,
    alt: "longHeir",
  },
  {
    src: manicureMob,
    alt: "manicure",
  },
];
const classNames = {
  imgBox: "Portfolio-imgBox",
  tumb: "Portfolio-tumb",
};
const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h2 className="Portfolio-title">портфолио</h2>
      <SwipersInApp.CommunSwiper data={images} classNames={classNames} />
    </div>
  );
};
export default Portfolio;
