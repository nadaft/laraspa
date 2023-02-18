import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import Spinner from '@/components/Spinner';
import Head from '@/components/Head';

function VerifyEmail() {
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const { userId, hash } = params;

  const [isVerificationProcessing, setIsVerificationProcessing] = useState(false);
  const [message, setMessage] = useState({
    type: '',
    content: '',
  });

  const verifyEmail = async () => {
    setIsVerificationProcessing(true);
    await axios
      .get(`/api/auth/email/verify/${userId}/${hash}?${searchParams.toString()}`)
      .then((res) => {
        setMessage({
          type: 'success',
          content: res.data.message,
        });
      })
      .catch((err) => {
        setMessage({
          type: 'error',
          content: err.response.data.message,
        });
      })
      .finally(() => {
        setIsVerificationProcessing(false);
      });
  };

  useEffect(() => {
    verifyEmail();
  }, []);

  return (
    <>
      <Head title="Verify Email" />
      <div className="flex h-screen flex-col justify-center">
        <div className="mx-auto grid max-w-lg gap-6 rounded-md bg-white px-4 py-8">
          <h2 className="text-center text-3xl font-bold">
            {!isVerificationProcessing && message.type && message.type === 'success' && (
              <span>Verification Success</span>
            )}
            {!isVerificationProcessing && message.type && message.type === 'error' && (
              <span>Verification Failed</span>
            )}
          </h2>

          {isVerificationProcessing && (
            <>
              <h2 className="text-center text-3xl font-bold">Verifying Email ...</h2>
              <div className="mt-8 flex justify-center">
                <Spinner className="h-12" />
              </div>
            </>
          )}

          <div className="flex flex-col items-center justify-center gap-6">
            {message.type && message.type === 'success' && (
              <>
                <div className="w-full max-w-sm rounded-md bg-green-100 px-3 py-2 text-center text-lg text-green-800">
                  {message.content}
                </div>
                <Link
                  to="/login"
                  className="text-blue-800 hover:text-blue-700 hover:underline focus:text-blue-600"
                >
                  Your can login here
                </Link>
              </>
            )}
            {!isVerificationProcessing && message.type && message.type === 'error' && (
              <>
                <div className="w-full max-w-sm rounded-md bg-red-100 px-3 py-2 text-center text-lg text-red-800">
                  {message.content}
                </div>

                <Link
                  to="/email/resend"
                  className="text-blue-800 hover:text-blue-700 hover:underline focus:text-blue-600"
                >
                  Kirim ulang link konfirmasi email?
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
