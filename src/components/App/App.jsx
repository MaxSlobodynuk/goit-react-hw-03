import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

const contacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contactList, setContactList] = useState(contacts);
  const [inputValue, setInputValue] = useState("");

  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };

  const handleAddContact = (newContact) => {
    setContactList([...contactList, newContact]);
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox inputValue={inputValue} handleInput={handleInput} />
      <ContactList contactList={filteredContacts} />
    </div>
  );
};

export default App;
