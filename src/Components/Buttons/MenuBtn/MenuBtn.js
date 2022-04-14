import { ReactComponent as HeaderIcon } from "../../../images/svg/menu.svg";

import { CommunButton } from "..";

import "./index.scss";
const MenuBtn = ({ onClick }) => {
  return (
    <CommunButton type="button" className="MenuBtn-btn" onClick={onClick}>
      <HeaderIcon width="40" height="40" className="MenuBtn-svgMenu" />
    </CommunButton>
  );
};
export default MenuBtn;
