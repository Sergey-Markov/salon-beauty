const PortfolioCard = ({ classNames, src, alt }) => {
  const { imgBox, tumb } = classNames;
  return (
    <>
      <div className={imgBox}>
        <img src={src} alt={alt} />
      </div>
      <div className={tumb} />
    </>
  );
};
export default PortfolioCard;
