import logo from "../../imeges/svg/logo.svg";
import "./WelcomeCard.scss";
const WelcomeCard = () => {
  return (
    <div className="WelcomeCard-container">
      <img src={logo} className="WelcomeCard-logo" />
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default WelcomeCard;
