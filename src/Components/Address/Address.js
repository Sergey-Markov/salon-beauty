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
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.2917422712407!2d32.09043849265292!3d49.43772381934273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b0d4f2264b5%3A0x7fab7bca29b575f8!2zU0xPTiBTUEEg0YHQv9CwLdGB0LDQu9C-0L0!5e0!3m2!1sru!2sua!4v1650029119292!5m2!1sru!2sua"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </address>
  );
};
export default Address;
