import React, { useState } from 'react';

function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password }); // Replace with actual form submission logic
  };

  return (
    <div className="items-center max-w-md mx-auto justify-center font-dm_sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Sign In</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-black text-lg font-bold mb-2"
          >
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-800"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-black text-lg font-bold mb-2"
          >
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="bg-black mt-5 h-[1px] w-full"></div>
        <button
          type="button"
          onClick={() =>
            window.open(
              'https://accounts.google.com/AccountChooser/signinchooser?service=CPanel&ddm=1&flowName=GlifWebSignIn&flowEntry=AccountChooser'
            )
          }
          className="flex justify-center items-center mt-5 rounded w-full bg-gray-100 py-2 px-4 hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            className="mr-2"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <span className="text-lg font-bold">Sign in with Google</span>
        </button>
      </form>
    </div>
  );
}

export default Sign;
