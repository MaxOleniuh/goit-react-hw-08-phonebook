import { Button, Input, Title } from '@mantine/core';
import { IconAt, IconKey, IconUser } from '@tabler/icons-react';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { getError } from 'redux/contacts/selectors';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const RegisterForm = () => {
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');

  

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    if (error) {
      alert('Error!')
    }
  };

  
  const handleChange = e => {
    const userPassword = e.target.value;
    setPassword(userPassword);
  }


  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <Title order={1}>Registration Form</Title>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <Input
            icon={<IconUser />}
            placeholder="Your Name"
            type="text"
            name="name"
          />
        </label>
        <label>
          Email
          <Input
            icon={<IconAt />}
            placeholder="Your Email"
            type="email"
            name="email"
          />
        </label>
        <label>
          Password
          <Input
            onChange={handleChange}
            icon={<IconKey />}
            placeholder="Your Password"
            type="password"
            name="password"
          />
        </label>
        <Button type="submit" sx={{ marginTop: '12px' }}  variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
          Register
        </Button>
   {password.length < 9 && password.length > 3 && <Alert icon={<IconAlertCircle size="1rem" />} title="Alert!" color="red" data-aos="zoom-in">
      Please make sure the password is more than 9 characters long!
        </Alert>}
        {password.length >= 9 && <Alert icon={<IconAlertCircle size="1rem" />} title="Thanks!" color="green" data-aos="zoom-in">
      Now your password is strong!
    </Alert>}
      </form>
    </>
  );
};