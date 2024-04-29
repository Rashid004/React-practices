/** @format */

import { useState } from "react";
import { app, database } from "./firebaseConfige";
// import {
//   getAuth,
//   // signInWithEmailAndPassword,
//   // createUserWithEmailAndPassword,
//   // GoogleAuthProvider,
//   // signInWithPopup,
// } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
function App() {
  const [data, setData] = useState({});
  // const auth = getAuth(app);

  const collectionRef = collection(database, "users");

  function handleInput(event) {
    let inputData = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputData });
  }

  const handleSubmit = () => {
    addDoc(collectionRef, {
      email: data.email,
      password: data.password,
    })
      .then(() => alert("Data added"))
      .catch((err) => alert(err.message));
  };

  const getData = () => {
    getDocs(collectionRef).then((res) =>
      console.log(
        res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      )
    );
  };

  const updateData = () => {
    const docToUpdate = doc(database, "users", "rfqp9lYaOUozL9v4sDvp");

    updateDoc(docToUpdate, {
      email: "anas@gmail.com",
      password: 11111,
    })
      .then(() => alert("Data Updated"))
      .catch((err) => alert(err.message));
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
