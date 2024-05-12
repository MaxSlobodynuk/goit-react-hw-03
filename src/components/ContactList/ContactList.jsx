import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactList }) => {
  return (
    <ul className={css.container}>
      {contactList.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
