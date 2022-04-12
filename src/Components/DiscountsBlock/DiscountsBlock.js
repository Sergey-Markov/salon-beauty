import "./DiscountsBlock.scss";

const data = [
  {
    title: "Визит №1",
    text: "скидка 20% на все услуги и продукцию",
  },
  {
    title: "Визит №2",
    text: "скидка 10% на все услуги и продукцию)",
  },
  {
    title: "Визит №3",
    text: "Подарок от салона",
  },
];
const title = "Получайте скидки в течение трех месяцев с первого визита";
const DiscountsBlock = () => {
  return (
    <div className="DiscountsBlock">
      <h2 className="DiscountsBlock-title">{title}</h2>
      <ul className="DiscountsBlock-list">
        {data.map((el) => (
          <li className="DiscountsBlock-item">
            <div className="DiscountsBlock-first-part">
              <div className="DiscountsBlock-item-circle"> </div>
              <div className="DiscountsBlock-item-title">{el.title}</div>
            </div>
            <div className="DiscountsBlock-item-text">{el.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DiscountsBlock;
