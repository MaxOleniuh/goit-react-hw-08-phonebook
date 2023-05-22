import { Link } from 'react-router-dom';
import UserMenuStyled from './UserMenu.styled'
export const UserMenu = () => {
    return (
        <UserMenuStyled>
  <p>mango@mail.com</p>
  <Link to='/'>Logout</Link>
</UserMenuStyled>
    )
}

