import { useState } from "react";
import "./Forma.scss";

const Forma = () => {
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(phone);
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="tel"
        placeholder="093-***-****"
        name="telephone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={handleChange}
        value={phone}
        required
        className="Forma-inputTel"
      />
      <input type="submit" value="отправить" className="Forma-submitTel" />
    </form>
  );
};
export default Forma;
