import React, { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Head from '@/components/Head';
import Input from '@/components/Input';
import useAuth from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isLoginProcessing, setIsLoginProcessing] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const auth = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoginProcessing(true);
    setEmailError('');
    setPasswordError('');

    await auth.login({
      email,
      password,
    }).then(() => {
      navigate('/dashboard', { replace: true });
    }).catch((err) => {
      setEmailError(err?.errors?.email ?? '');
      setPasswordError(err?.errors?.password ?? '');
    }).finally(() => {
      setIsLoginProcessing(false);
    });
  }

  useEffect(() => {
    if (searchParams.get('email')) {
      setEmail(searchParams.get('email'));
    }

    return () => {
      setEmail('');
    };
  }, [searchParams]);


  return (
    <>
      <Head title="Login" />
      <div className="flex flex-col justify-center h-screen px-4 sm:p-12 md:p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Hi, Welcome Back!</h3>
          <p className="text-sm text-gray-700">Enter your credentials here to login</p>
        </div>
        <form className="grid mt-8 gap-y-2" method="post" onSubmit={handleSubmit}>
          <Input
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            label="Email"
            type="email"
            size="lg"
            required
            errorText={emailError}
            disabled={isLoginProcessing}
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
            disabled={isLoginProcessing}
          />
          <Link className='text-sm text-right text-gray-800 hover:text-blue-700 hover:underline' to="/forgot-password">Forgot password?</Link>
          <Button
            className="mt-2"
            type="submit"
            isLoading={isLoginProcessing}
          >
            Login
          </Button>
        </form>
        <div className='grid mt-12 text-center'>
          <Link className='text-gray-700 hover:text-blue-700 hover:underline' to="/register">Create new account?</Link>
          <Link className='text-gray-700 hover:text-blue-700 hover:underline' to="/email/resend">Your email is not verified?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
