import "./index.scss";
const ServiceCard = ({ slide, className }) => {
  return (
    <div className={`${className}-card-field`}>
      <div className={`${className}-card-field-with-img`}>
        <div className={`${className}-card-img`}>
          <img alt={slide.alt} src={slide.imgSrc} />
        </div>
        <h3 className={`${className}-card-title`}>{slide.title}</h3>
      </div>
      <p className={`${className}-card-text`}>{slide.text}</p>
    </div>
  );
};
export default ServiceCard;
