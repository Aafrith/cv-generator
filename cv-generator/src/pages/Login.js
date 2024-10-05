import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("You are successfully logged in!");
      navigate("/upload"); // Redirect to the CV upload page
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-8">Login to Upload Your CV</h2>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white p-3 rounded mb-4"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
