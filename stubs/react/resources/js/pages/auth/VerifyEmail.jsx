import Head from '@/components/Head';
import Spinner from '@/components/Spinner';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const VerifyEmail = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const { userId, hash } = params;

  const [isVerificationProcessing, setIsVerificationProcessing] = useState(false);
  const [message, setMessage] = useState({
    type: '',
    content: '',
  });

  const verifyEmail = async () => {
    setIsVerificationProcessing(true);
    await axios.get(`/api/auth/email/verify/${userId}/${hash}?${searchParams.toString()}`)
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
      <div className='flex flex-col justify-center h-screen'>
        <div className='grid max-w-lg gap-6 px-4 py-8 mx-auto bg-white rounded-md'>
          <h2 className='text-3xl font-bold text-center'>
            {!isVerificationProcessing && message.type && message.type == 'success' &&
              <span>Verification Success</span>
            }
            {!isVerificationProcessing && message.type && message.type == 'error' &&
              <span>Verification Failed</span>
            }
          </h2>

          {isVerificationProcessing &&
            <>
              <h2 className='text-3xl font-bold text-center'>
                Verifying Email ...
              </h2>
              <div className='flex justify-center mt-8'>
                <Spinner className='h-12' />
              </div>
            </>
          }

          <div className='flex flex-col items-center justify-center gap-6'>
            {message.type && message.type == 'success' &&
              <>
                <div className='w-full max-w-sm px-3 py-2 text-lg text-center text-green-800 bg-green-100 rounded-md'>{message.content}</div>
                <Link
                  to='/login'
                  className='text-blue-800 hover:underline hover:text-blue-700 focus:text-blue-600'
                >
                  Your can login here
                </Link>
              </>
            }
            {!isVerificationProcessing && message.type && message.type == 'error' &&
              <>
                <div className='w-full max-w-sm px-3 py-2 text-lg text-center text-red-800 bg-red-100 rounded-md'>{message.content}</div>

                <Link
                  to='/email/resend'
                  className='text-blue-800 hover:underline hover:text-blue-700 focus:text-blue-600'
                >
                  Kirim ulang link konfirmasi email?
                </Link>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyEmail;
