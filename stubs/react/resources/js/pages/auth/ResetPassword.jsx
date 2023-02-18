import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '@/components/Input';
import Head from '@/components/Head';
import Button from '@/components/Button';

function ResetPassword() {
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

  const [isResetPasswordProcessing, setIsResetPasswordProcessing] = useState(false);

  const { token } = params;

  const email = searchParams.get('email');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsResetPasswordProcessing(true);
    setPasswordError('');

    await axios
      .post('/api/auth/reset-password', {
        token,
        email,
        password,
        password_confirmation: passwordConfirmation,
      })
      .then(() => {
        toast.success('New password saved');
        navigate(`/login?email=${email}`);
      })
      .catch((err) => {
        setPasswordError(err.response.data?.errors?.password ?? '');
        setPasswordConfirmationError(err.response.data?.errors?.password_confirmation ?? '');
        toast.error(err.response.data?.message ?? '');
      })
      .finally(() => {
        setIsResetPasswordProcessing(false);
      });
  };

  return (
    <>
      <Head title="Reset Password" />
      <div className="flex h-screen flex-col justify-center px-4 sm:p-12 md:p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Reset Password</h3>
          <p className="text-sm text-gray-700">Create your new password below</p>
        </div>
        <form
          className="mt-8 grid gap-y-2"
          method="post"
          onSubmit={handleSubmit}
        >
          <Input
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            label="Password"
            type="password"
            size="lg"
            required
            errorText={passwordError}
            disabled={isResetPasswordProcessing}
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
            disabled={isResetPasswordProcessing}
          />
          <Button
            className="mt-2"
            type="submit"
            isLoading={isResetPasswordProcessing}
          >
            Save Password
          </Button>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
