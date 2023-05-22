import { nanoid } from 'nanoid';
import {
  FormStyled,
  ButtonStyled,
  LabelStyled,
  InputStyled,
} from './Form.styled';
import { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = nanoid();
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value;
    const form = e.currentTarget;
    if (items.some(el => el.name.toLowerCase() === inputValue.toLowerCase())) {
      alert(`${name} is already in your phonebook`);
    }
    else {
      dispatch(addContact({ name, phone: number }));    
    }
    form.reset();
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  return (
    <>
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor={id}>
        <span>Name</span>
        <InputStyled
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelStyled>
      <LabelStyled htmlFor={id}>
        <span>Number</span>
        <InputStyled
          onChange={handleChange}
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
