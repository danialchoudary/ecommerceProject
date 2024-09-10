import React, { useState } from 'react';

function SignInSignUpModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          &times;
        </button>
        
        {isSignUp ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Username" className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="password" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded-lg" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Sign Up</button>
            </form>
            <p className="text-sm mt-4 text-gray-600">
              Already have an account? <span onClick={toggleForm} className="text-blue-500 cursor-pointer">Sign In</span>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded-lg" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Sign In</button>
            </form>
            <p className="text-sm mt-4 text-gray-600">
              Don't have an account? <span onClick={toggleForm} className="text-blue-500 cursor-pointer">Sign Up</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default SignInSignUpModal;
