/** @format */

// Login.jsx
import { useContext, useState } from "react";
import UserContextAp from "../Contexts/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContextAp);

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username); // Set the user as the username provided
  }

  return (
    <div className="flex flex-col gap-2 w-1/2 items-center justify-center mx-auto">
      <h1>Login</h1>
      <input
        className="rounded-sm p-2 text-black"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        type="password"
        className="rounded-sm p-2 text-black"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-black rounded-sm text-2xl px-4 py-2 hover:bg-blue-300 "
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
