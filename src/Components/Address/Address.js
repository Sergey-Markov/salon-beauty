import "./Address.scss";
import { svgImages } from "../../images/svg";
const Address = () => {
  const { phoneWatsUp } = svgImages;
  return (
    <address className="Address">
      <h2 className="Address-title">контакты</h2>
      <div className="Address-field">
        <img
          src={phoneWatsUp}
          alt="phoneWatsUp icon"
          className="Address-field--img"
        />
        <div>
          <p className="Address-field--text">
            Митино Волоколамская Пятницкое шоссе, д.9
          </p>
          <a className="Address-field--tel" href="tel:+30933548272">
            +3 (093) 354-82-72
          </a>
          <a className="Address-field--insta" href="https://www.instagram.com/">
            instagram
          </a>
        </div>
      </div>
    </address>
  );
};
export default Address;
