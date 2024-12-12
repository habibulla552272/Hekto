import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignInSection1 = () => {

    let [email,setEmail]= useState("")
    let [password, setPassword] = useState("");

    let emailHandel=(e)=>{
        setEmail(e.target.value);
    }
   let passwordHandel = (e) => {
     setPassword(e.target.value);
   };







  const auth = getAuth();
  const signInHandel = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
       console.log('Nice Bro');
       
      })
      .catch((error) => {
        
        console.log(error);
        
        // ..
      });
  };
  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="w-11/12 mx-auto md:w-5/12  shadow-2xl px-5 py-5">
          <h2 className="text-center py-1 text-xl font-josefin font-semibold">
            Sign In
          </h2>
          <p className="text-center">
            Please login using account detail bellow.
          </p>

          <div>
            <div className="flex flex-col gap-8 py-4">
              <input
                onChange={(e) => emailHandel(e)}
                className="w-full outline-none px-2 py-2 border-2 rounded-md"
                type="email"
                placeholder="Email Address"
              />
              <input
                onChange={(e) => passwordHandel(e)}
                className="w-full outline-none px-2 py-2 border-2 rounded-md"
                type="password"
                placeholder="Password"
              />
            </div>

            <p className="py-2 cursor-pointer">Forgot your password?</p>

            <button
              onClick={() => signInHandel()}
              className="bg-buttom-bg text-center w-full py-2 rounded-md"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInSection1;
