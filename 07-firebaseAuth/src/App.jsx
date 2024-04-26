/** @format */

import { useState } from "react";
import { app } from "./firebaseConfige";
import {
  getAuth,
  signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function App() {
  const [data, setData] = useState({});
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  function handleInput(event) {
    let inputData = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputData });
  }

  const handleSubmit = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log("User signed up:", response.user);
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        // Add logic to display error message to the user
      });
  };

  return (
    <>
      <div className="max-w-full flex flex-col m-auto bg-blue-200 my-10 rounded-lg">
        <form className="flex flex-col items-center space-y-1 mb-4">
          <div className="">
            <label className="cursor-pointer mx-auto block text-lg font-medium leading-6 text-black">
              Email Address
            </label>
            <input
              className="px-3 py-1 m-1 rounded-sm w-96 border-spacing-1 mb-5 text-lg"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleInput}
            />
          </div>

          <div>
            <label className="cursor-pointer mx-auto block text-lg font-medium leading-6 text-black">
              Password
            </label>
            <input
              name="password"
              className="px-3 py-1 m-1 rounded-sm w-96 border-spacing-1 mb-5 text-lg"
              type="password"
              placeholder="Password"
              onChange={handleInput}
            />
          </div>
        </form>
        <div className="flex items-center gap-4 justify-center">
          <button
            className="bg-blue-600 px-4 py-1 text-xl rounded-lg outline-none"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
