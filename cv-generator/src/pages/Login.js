import React, { useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("You are successfully logged in!");
      navigate("/upload");
    } catch (error) {
      console.error("Error logging in: ", error);
      setErrorMessage("Google login failed. Please try again.");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    try {
      // Firebase sign in with email and password
      await signInWithEmailAndPassword(auth, username, password);
      alert(`Logged in as ${username}`);
      navigate("/upload");
    } catch (error) {
      console.error("Error logging in: ", error);
      setErrorMessage("Invalid credentials. Please register if you don't have an account.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login to Upload Your CV</h2>

        {errorMessage && (
          <div className="mb-4 text-red-600 text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
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
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 text-center">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded-lg mb-4 hover:bg-red-400 transition-colors"
        >
          Login with Google
        </button>

        <div className="mt-4 text-center">
          <p>Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
