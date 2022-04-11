import { CommunButton } from "..";
import "./index.scss";

const GetDiscountBtn = ({ children, onClick }) => {
  return (
    <CommunButton
      type="button"
      className="GetDiscountBtn-btn"
      onClick={onClick}
    >
      {children}
    </CommunButton>
  );
};
export default GetDiscountBtn;
