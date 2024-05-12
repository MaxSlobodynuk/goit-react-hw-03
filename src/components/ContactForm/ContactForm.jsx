import { Formik, Field, Form } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, actions) => {
    handleAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        id: nanoid(),
      }}
      onSubmit={handleSubmit}
    >
      <div className={css.container}>
        <Form className={css.form}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field className={css.input} type="text" id="name" name="name" />

          <label className={css.label} htmlFor="number">
            Number
          </label>
          <Field className={css.input} type="text" id="number" name="number" />

          <div className={css.containerButton}>
            <button className={css.button} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
