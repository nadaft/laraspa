import React, { useState } from 'react';
import Button from '@/components/Button';
import Head from '@/components/Head';
import Input from '@/components/Input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '@/store/auth.slice';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

  const [isRegisterProcessing, setIsRegisterProcessing] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsRegisterProcessing(true);
    setEmailError('');
    setPasswordError('');

    await axios.post('/api/auth/register', {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }).then((res) => {
      dispatch(setAuth({
        token: res.data.data.token,
        user: res.data.data.user,
      }));
      navigate('/dashboard', { replace: true });
    }).catch((err) => {
      setNameError(err?.response.data.errors?.name ?? '');
      setEmailError(err?.response.data.errors?.email ?? '');
      setPasswordError(err?.response.data.errors?.password ?? '');
      setPasswordConfirmationError(err?.response.data.errors?.password_confirmation ?? '');
    }).finally(() => {
      setIsRegisterProcessing(false);
    });
  }

  return (
    <>
      <Head title="Register" />
      <div className="flex flex-col justify-center h-screen px-4 sm:p-12 md:p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Hi, Welcome!</h3>
          <p className="text-sm text-gray-700">Enter your credentials here to register</p>
        </div>
        <form className="grid mt-8 gap-y-2" method="post" onSubmit={handleSubmit}>
          <Input
            handleChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            label="Name"
            type="text"
            size="lg"
            required
            errorText={nameError}
            disabled={isRegisterProcessing}
          />
          <Input
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            label="Email"
            type="email"
            size="lg"
            required
            errorText={emailError}
            disabled={isRegisterProcessing}
          />
          <Input
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            label="Password"
            type="password"
            size="lg"
            required
            errorText={passwordError}
            disabled={isRegisterProcessing}
          />
          <Input
            handleChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
            name="password_confirmation"
            label="Password Confirmation"
            type="password"
            size="lg"
            required
            errorText={passwordConfirmationError}
            disabled={isRegisterProcessing}
          />
          <Button
            className="mt-2"
            type="submit"
            isLoading={isRegisterProcessing}
          >
            Register
          </Button>
        </form>
        <div className='mt-12 text-center'>
          <Link className='text-gray-700 hover:text-blue-700 hover:underline' to="/login">Already have account?</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
