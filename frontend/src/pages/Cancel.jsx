import React from 'react';
// Assuming you use react-router-dom for navigation
import { Link } from 'react-router-dom'; 

const Cancel = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-red-50 p-6'>
      <div className='bg-white p-10 rounded-xl shadow-2xl text-center max-w-lg w-full'>
        
        {/* Cancel Icon (Inline SVG) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className='w-20 h-20 text-red-500 mx-auto mb-6'
        >
          <path 
            fillRule="evenodd" 
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" 
            clipRule="evenodd" 
          />
        </svg>
        
        {/* Title */}
        <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3'>
          Payment Canceled 😔
        </h1>
        
        {/* Message */}
        <p className='text-lg text-gray-600 mb-8'>
          Your payment was not completed. You can try again or return to the product page.
        </p>

        {/* Action Button */}
        <Link 
          to="/" 
          className='inline-block py-3 px-8 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300'
        >
          Back to Home Page
        </Link>
        
        {/* Optional Contact Message */}
        <p className='mt-4 text-sm text-gray-500'>
          If you believe this is an error, please <a href="mailto:support@example.com" className='underline hover:text-red-600'>contact support</a>.
        </p>
      </div>
    </div>
  );
};

export default Cancel;