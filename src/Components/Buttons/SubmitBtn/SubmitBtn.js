import "./SubmitBtn.scss";
const SubmitBtn = ({ handleSubmit }) => {
  return (
    <button type="submit" onSubmit={handleSubmit} className="Btn-submitBlack">
      отправить
    </button>
  );
};
export default SubmitBtn;
