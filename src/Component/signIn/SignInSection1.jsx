import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignInSection1 = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailMessage, setEmailMessage] = useState("");
  let [passwordMessage, setPasswordMessage] = useState("");
  let [success, setSuccess] = useState("");

  const auth = getAuth();

  let emailHandel = (e) => {
    setEmail(e.target.value);
  };
  let passwordHandel = (e) => {
    setPassword(e.target.value);
  };

  const signInHandel = () => {
    if (!email) {
      setEmailMessage("Email De");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailMessage("Correct Email  De");
    } else if (!password) {
      setEmailMessage("");
      setPasswordMessage("password de");
    } else if (!/(?=.*[a-z])/.test(password)) {
      setEmailMessage("");
      setPasswordMessage("Please Lowercase");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setEmailMessage("");
      setPasswordMessage("Please uppderCase");
    } else if (!/(?=.*[0-9])/.test(password)) {
      setEmailMessage("");
      setPasswordMessage("Please number");
    } else if (!/(?=.{8,})/.test(password)) {
      setEmailMessage("");
      setPasswordMessage("Please Minimum 8 digit");
    } else {
      setEmailMessage('')
      setPasswordMessage('')
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setSuccess("Congratulation MD for Create your account");
          
        })
        .catch((error) => {
          let err = error.code;
          if (err.includes("auth/email-already-in-use")) {
            setSuccess("This Email all Redy existe");
          } else {
            setEmailMessage("");
            setPasswordMessage("");
          }

          // ..
        });
    }
  };
  return (
    <section>
      <div className="container mx-auto py-10">
        <div className="w-11/12 mx-auto md:w-5/12  shadow-2xl px-5 py-5">
          <p className="py-2 text-red-500 text-xl">{success}</p>
          <h2 className="text-center py-1 text-xl font-josefin font-semibold">
            Sign In
          </h2>
          <p className="text-center">
            Please login using account detail bellow.
          </p>

          <div>
            <div className="flex flex-col gap-8 py-4">
              <div>
                <input
                  onChange={(e) => emailHandel(e)}
                  className="w-full outline-none px-2 py-2 border-2 rounded-md"
                  type="email"
                  placeholder="Email Address"
                />
                <p>{emailMessage}</p>
              </div>
              <div>
                <input
                  onChange={(e) => passwordHandel(e)}
                  className="w-full outline-none px-2 py-2 border-2 rounded-md"
                  type="password"
                  placeholder="Password"
                />
                <p>{passwordMessage}</p>
              </div>
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
