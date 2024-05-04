import { Formik, Form, Field, ErrorMessage } from "formik";

import { object, string } from "yup";
import style from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();

  const contactSchema = object({
    name: string().min(3, "Too Short").max(50, "Too much").required(),
    number: string()
      .min(3, "Too Short")
      .max(50, "Too much")

      .required(),
  });
  const handleSubmit = (values, options) => {
    options.resetForm();
    dispatch(addContact(values));
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.submitForm}>
          <label className={style.label}>
            <span className={style.spanUser}>Name</span>
            <div className={style.fieldContainer}>
              <Field type="text" name="name" className={style.field}></Field>
              <ErrorMessage
                component="span"
                name="name"
                className={style.error}
              ></ErrorMessage>
            </div>
          </label>
          <label className={style.label}>
            {" "}
            <span className={style.spanUser}>Number</span>
            <div className={style.fieldContainer}>
              <Field
                type="text"
                name="number"
                className={style.field}
                placeholder="format xxx-xx-xx"
              ></Field>
              <ErrorMessage
                component="span"
                name="number"
                className={style.error}
              ></ErrorMessage>
            </div>
          </label>
          <button type="submit" className={style.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
