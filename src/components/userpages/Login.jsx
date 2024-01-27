
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, setSignUp]= useState(false);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const slideIn = useSpring({
    transform: 'translateX(0%)',
    from: { transform: 'translateX(-100%)' },
  });

  return (
    <animated.div style={fadeIn} className="min-h-screen flex items-center justify-center bg-gray-50">
      <animated.div style={slideIn} className="max-w-md w-full p-6 space-y-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">{signUp?"SignUp":"Login"}</h2>
      
        <form className="mt-8 space-y-6" action="/" onSubmit={(e) => e.preventDefault()}>

        {signUp&&(
           <div>
           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
             Full Name
           </label>
           <input
             id="name"
             name="fullname"
             type="text"
             autoComplete="name"
             required
             className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
             onChange={(e) => setEmail(e.target.value)}
           />
         </div>
        )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {signUp&&(
           <div>
           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
             Confirm Password
           </label>
           <input
             id="confirmPassword"
             name="confirm"
             type="password"
             autoComplete="confirm"
             required
             className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
             onChange={(e) => setEmail(e.target.value)}
           />
         </div>
        )}

          <div>
            <Link to={"/"}>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              {signUp?"SignUp":"Login"}
            </button>
            </Link>
          </div>
        </form>

      <p onClick={()=>{
        setSignUp(!signUp)
      }} className='text-center cursor-pointer hover:underline'>{signUp?"Login":"create account"}</p>


      </animated.div>
    </animated.div>
  );
};

export default Login;