import { UlStyled, ButtonStyled, LiStyled } from './List.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
const List = ({contacts}) => {
  const dispatch = useDispatch();
  return (
    <UlStyled>
       {contacts.map(({ id, phone, name }) => (
        <LiStyled key={id}>
          {name}: {phone}
          <ButtonStyled onClick={() => dispatch(deleteContact(id))}>Delete</ButtonStyled>
        </LiStyled>
      ))}
    </UlStyled>
  );
};

List.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default List;
