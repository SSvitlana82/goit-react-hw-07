import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { selectContacts, selectfilters } from "../../redux/selectors";

const getFilterContacts = (contacts, name) => {
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(name.toLowerCase().trim());
  });
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectfilters);
  const filters = getFilterContacts(contacts, nameFilter);
  return (
    <ul className={style.list}>
      {filters.map((contact) => (
        <li key={contact.id} className={style.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
