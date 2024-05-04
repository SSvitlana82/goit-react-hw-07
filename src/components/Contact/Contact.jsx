import style from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={style.contactBox}>
      <div className={style.container}>
        <p className={style.contactField}>
          <BsFillPersonFill size={20} className={style.icon} />
          {contact.name}
        </p>
        <p className={style.contactField}>
          <BsFillTelephoneFill className={style.icon} />
          {contact.number}
        </p>
      </div>
      <button onClick={onDelete} className={style.contactBtn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
