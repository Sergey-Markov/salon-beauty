import { v4 as uuidv4 } from "uuid";

import "./Actions.scss";

const data = [
  {
    title: "приветственная акция",
    discount: "скидка 20 %",
  },
  {
    title: "Пробная процедура rf лифтинг (лицо+область глаз)",
    discount: "скидка 50 %",
  },
  {
    title: "пробная процедура эндосфера",
    discount: "4300 грн.",
  },
  {
    title: "подбираются под конкретного клиента",
    discount: "персонализированные акции",
  },
];
const Actions = () => {
  return (
    <div className="Actions">
      <h2 className="Actions-title">акции</h2>
      {data.map((el) => (
        <div className="Actions-itemField" key={uuidv4()}>
          <h3 className="Actions-itemField--title">{el.title}</h3>
          <p className="Actions-itemField--discount">{el.discount}</p>
        </div>
      ))}
    </div>
  );
};
export default Actions;
