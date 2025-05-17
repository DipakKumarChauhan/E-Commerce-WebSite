import React from 'react';
import { Link } from 'react-router-dom';
import register from '../assets/register.webp';

const Register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registering:', { name, email, password });
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form onSubmit = {handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-rabbit-red text-white font-bold py-2 px-4 rounded w-full hover:bg-red-600 transition-colors focus:outline-none"
          >
            Register
          </button>

          <p className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 font-bold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side - Image only */}
      <div className="hidden md:block w-1/2 bg-gray-800">
        <img
          src={register}
          alt="Register"
          className="w-full h-[750px] object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
