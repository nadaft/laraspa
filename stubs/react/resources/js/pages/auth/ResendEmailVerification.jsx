import React, { useState } from 'react';
import Button from '@/components/Button';
import Head from '@/components/Head';
import Input from '@/components/Input';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ResendEmailVerification = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [isSubmitProcessing, setIsSubmitProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitProcessing(true);
    setEmailError('');

    await axios.post('/api/auth/email/resend', {
      email,
    }).then(() => {
      toast.success('Verification link already sent to your email');
    }).catch((err) => {
      toast.error(err.response.data.message, { autoClose: 10000 });
      setEmailError(err.response.data?.errors?.email ?? '');
    }).finally(() => {
      setIsSubmitProcessing(false);
    });
  }

  return (
    <>
      <Head title="Resend Email Verification" />
      <div className="flex flex-col justify-center h-screen px-4 sm:p-12 md:p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Resend Email Verification</h3>
          <p className="text-sm text-gray-700">Enter your email here and we will send steps to verify your email</p>
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
            disabled={isSubmitProcessing}
          />
          <Button
            className="mt-2"
            type="submit"
            isLoading={isSubmitProcessing}
          >
            Send
          </Button>
        </form>
        <div className='mt-12 text-center'>
          <Link className='text-gray-700 hover:text-blue-700 hover:underline' to="/login">Already verified?</Link>
        </div>
      </div>
    </>
  );
};

export default ResendEmailVerification;
