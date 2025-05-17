import React, { useState } from 'react';

const Login = () => {
  const [uname, setuname] = useState('');
  const [pass, setpass] = useState('');
  const [login, setlogin] = useState(false);

  const handlelogin = () => {
    const tusername = 'Vishwa';
    const tpass = '123@';

    if (tusername === uname && tpass === pass) {
      setlogin(true);
      console.log('Success');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">Login</h1>

        {login ? (
          <h2 className="text-green-600 text-xl text-center font-semibold">Login Successful ✅</h2>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username:</label>
              <input
                value={uname}
                onChange={(e) => setuname(e.target.value)}
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <button
              onClick={handlelogin}
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
