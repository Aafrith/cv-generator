import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register the user using email and password
      await createUserWithEmailAndPassword(auth, email, password);
      alert(`Successfully registered! You can now log in.`);
      navigate("/"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Error registering: ", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      // Register or Sign in the user using Google
      await signInWithPopup(auth, googleProvider);
      alert("Successfully registered with Google! You can now log in.");
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Error with Google registration: ", error);
      setErrorMessage("Google registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        {errorMessage && (
          <div className="mb-4 text-red-600 text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition-colors"
          >
            Register with Email
          </button>
        </form>

        <div className="my-6 text-center">or</div>

        <button
          onClick={handleGoogleRegister}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-400 transition-colors"
        >
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
