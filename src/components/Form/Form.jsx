import {
  FormStyled,
  ButtonStyled,
  LabelStyled,
  InputStyled,
} from './Form.styled';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';

const Form = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value;
    const form = e.currentTarget;
    const text = {name: form.elements.name.value , number: form.elements.number.value}
    if (items.some(el => el.name.toLowerCase() === inputValue.toLowerCase())) {
      alert(`${text.name} is already in your phonebook`);
    }
    else {
      dispatch(addContact(text));
    }
    form.reset();
  };


  return (
    <>
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        <span>Name</span>
        <InputStyled
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelStyled>
      <LabelStyled>
        <span>Number</span>
        <InputStyled
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelStyled>
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </FormStyled>
    </>
    
  );
};
export default Form;
