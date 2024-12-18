import React from 'react'
import { Link } from 'react-router-dom';

const LoginSection1 = () => {
  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="w-11/12 mx-auto md:w-5/12  shadow-2xl px-5 py-5">
          <h2 className="text-center py-1 text-xl font-josefin font-semibold">
            Loging
          </h2>
          <p className="text-center">
            Please login using account detail bellow.
          </p>

          <div>
            <div className="flex flex-col gap-8 py-4">
              <input
                className="w-full outline-none px-2 py-2 border-2 rounded-md"
                type="email"
                placeholder="Email Address"
              />
              <input
                className="w-full outline-none px-2 py-2 border-2 rounded-md"
                type="password"
                placeholder="Password"
              />
            </div>

            <p className="py-2 cursor-pointer">Forgot your password?</p>

            <button className="bg-buttom-bg text-center w-full py-2 rounded-md">
              Sign UP
            </button>

            <div className="flex gap-2 justify-between px-2 pt-4">
              <p className="text-center py-2">
                Don't have an Account? Create account
              </p>
              <Link to="/signin" className="bg-buttom-bg px-2  rounded-md flex">
                <button>Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginSection1
