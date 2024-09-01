import style from "./Features.module.css";
import CamperInfo from "./../CamperInfo/CamperInfo.jsx";
import FormBook from "./../FormBook/FormBook.jsx";
const Features = () => {
  return (
    <div className={style.container}>
      <CamperInfo />
      <FormBook />
    </div>
  );
};

export default Features;
