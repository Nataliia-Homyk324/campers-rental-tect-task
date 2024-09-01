import style from "./Reviews.module.css";
import FormBook from "./../FormBook/FormBook.jsx";

const Reviews = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}> Unfortunately, there are no reviews yet!</h2>
      <FormBook />
    </div>
  );
};

export default Reviews;
