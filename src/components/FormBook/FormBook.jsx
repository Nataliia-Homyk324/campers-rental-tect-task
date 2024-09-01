import style from "./FormBook.module.css";
import { Formik, Form, Field } from "formik";
import { clsx } from "clsx";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  date: Yup.date().required("Required"),
  comment: Yup.string(),
});

const FormBook = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    toast("Successfully booked");
    console.log(values);
    actions.resetForm();
  };
  const [startDate, setStartDate] = useState(null);
  return (
    <div className={style.formBook}>
      <h3 className={style.title}>Book your campervan now</h3>
      <p className={style.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        <Form className={style.wrapper}>
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="Name*"
            className={style.input}
          />
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Email*"
            className={style.input}
          />

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Booking date*"
            className={style.input}
          />

          <Field
            as="textarea"
            name="comment"
            id="comment"
            placeholder="Comment"
            className={clsx(style.input, style.comment)}
          />

          <button type="submit" className={style.link}>
            Send
          </button>
        </Form>
      </Formik>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "20px",
            color: "#713200",
          },
        }}
      />
    </div>
  );
};

export default FormBook;
