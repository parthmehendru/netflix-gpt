import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toggleLoading } from '../utils/gptSlice';

const GptError = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { errorMessage } = location.state || {}; // Get the error message from the location's state

  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="bg-white p-6 rounded-md shadow-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg">{errorMessage || 'Something went wrong!'}</p>
        <Link to="/browse" onClick={()=> dispatch(toggleLoading(0))} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default GptError;
