import { UlStyled, ButtonStyled, LiStyled } from './List.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
const List = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <>
      <UlStyled>
       {contacts.map(({ id, number, name }) => (
        <LiStyled key={id}>
          {name}: {number}
          <ButtonStyled onClick={() => dispatch(deleteContact(id))}>Delete</ButtonStyled>
        </LiStyled>
      ))}
    </UlStyled>
      </>
    
  );
};

List.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default List;
