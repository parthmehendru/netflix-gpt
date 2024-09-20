import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    
    const handleRetry = () => {
        navigate('/browse');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-100">
            <div className="max-w-md mx-auto text-center p-5 bg-white shadow-md rounded-md">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
                <p className="text-lg text-gray-700 mb-6">Something went wrong while fetching data.</p>
                <button 
                    onClick={handleRetry}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default Error;
