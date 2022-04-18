import { useState } from "react";
import "./Forma.scss";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { SubmitBtn } from "../Buttons";

const Forma = () => {
  const [phone, setPhone] = useState("");

  const handleChange = (value) => {
    setPhone(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(phone);
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="Forma-inputTel">
      <PhoneInput
        country="ua"
        value={phone}
        onChange={handleChange}
        placeholder="38 (063) 123-45-67"
        // inputClass="Forma-inputTel"
      />
      <SubmitBtn />
    </form>
  );
};
export default Forma;
