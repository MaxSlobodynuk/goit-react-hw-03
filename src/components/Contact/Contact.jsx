import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <div className={css.container}>
      <div className={css.contactContainer}>
        <p className={css.name}>👤 {contact.name}</p>
        <span className={css.number}>📞 {contact.number}</span>
      </div>
      <button type="button" className={css.contactButton}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
