import React from 'react';
// Assuming you use react-router-dom for navigation
import { Link } from 'react-router-dom'; 

const Success = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-green-50 p-6'>
      <div className='bg-white p-10 rounded-xl shadow-2xl text-center max-w-lg w-full'>
        
        {/* Success Icon (Inline SVG) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className='w-20 h-20 text-green-500 mx-auto mb-6'
        >
          <path 
            fillRule="evenodd" 
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.89a.75.75 0 0 0-1.06-1.06l-4.25 4.25-2.25-2.25a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l5-5Z" 
            clipRule="evenodd" 
          />
        </svg>
        
        {/* Title */}
        <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3'>
          Payment Successful! 🎉
        </h1>
        
        {/* Message */}
        <p className='text-lg text-gray-600 mb-8'>
          Thank you for your order! Your payment has been processed successfully. You will receive an email confirmation shortly.
        </p>

        {/* Action Button */}
        <Link 
          to="/" 
          className='inline-block py-3 px-8 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300'
        >
          Continue Shopping
        </Link>
        
        {/* Optional Order Details Link */}
        <p className='mt-4 text-sm text-gray-500'>
          <a href="#" className='underline hover:text-green-600'>View Order Details</a>
        </p>
      </div>
    </div>
  );
};

export default Success;