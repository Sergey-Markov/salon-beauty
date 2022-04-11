import "./index.scss";
const ServiceCard = ({ slide, className }) => {
  return (
    <>
      <div className={`${className}-card-field`}>
        <img alt={slide.alt} src={slide.imgSrc} />
        <h3 className={`${className}-card-title`}>{slide.title}</h3>
      </div>
      <p className={`${className}-card-text`}>{slide.text}</p>
    </>
  );
};
export default ServiceCard;
