import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-5">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to My Landing Page</h1>
      <p className="text-lg text-gray-700 mb-8">This is a simple landing page built with React, TypeScript, and Tailwind CSS.</p>
      <img 
        src="https://source.unsplash.com/random/800x600" 
        alt="Random" 
        className="w-full max-w-lg h-auto rounded-lg shadow-lg"
      />
      <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
