import logo from "../../imeges/svg/logo.svg";

import locate from "../../imeges/svg/locate.svg";
import phone from "../../imeges/svg/phone.svg";
import website from "../../imeges/svg/website.svg";
import instagram from "../../imeges/svg/instagram.svg";

import "./WelcomeCard.scss";
const WelcomeCard = () => {
  return (
    <div className="WelcomeCard-container">
      <div className="WelcomeCard-simadaContainer">
        <div className="WelcomeCard-simadaContainer--column">simada</div>
        <div className="WelcomeCard-simadaContainer--column">simada</div>
      </div>
      <img src={logo} className="WelcomeCard-logo" alt="logo" />
      <div className="WelcomeCard-hero">
        <div className="WelcomeCard-hero--text">Уверенность в красоте!</div>
        <h2 className="WelcomeCard-hero--title">welcome card</h2>
        <div className="WelcomeCard-hero--circle"></div>
      </div>
      <div className="WelcomeCard-footer">
        <ul className="WelcomeCard-footer--list">
          <li className="WelcomeCard-footer--listItem">
            <a className="WelcomeCard-footer--listItemLink" href="#">
              <img
                src={locate}
                className="WelcomeCard-footer--logoSvg"
                alt="logo"
              />
              <span>Украина, м.Черкассы</span>
            </a>
            <a
              className="WelcomeCard-footer--listItemLink"
              href="tel:+380933548272"
            >
              <img
                src={phone}
                className="WelcomeCard-footer--logoSvg"
                alt="logo"
              />
              <span>(093)354-82-72</span>
            </a>
          </li>
          <li className="WelcomeCard-footer--listItem">
            <a
              className="WelcomeCard-footer--listItemLink"
              href="https://www.w3schools.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={website}
                className="WelcomeCard-footer--logoSvg"
                alt="logo"
              />
              <span className="WelcomeCard-footer--website">Simada.com</span>
            </a>
            <a
              className="WelcomeCard-footer--listItemLink"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                className="WelcomeCard-footer--logoSvg"
                alt="logo"
              />
              <span>simada_beauty</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default WelcomeCard;
