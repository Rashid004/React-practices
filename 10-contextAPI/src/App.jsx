/** @format */

import "./App.css";
import UserContextProvider from "./Contexts/UserContextProvider";
import Login from "./components/Login";
import Profle from "./components/Profle";

function App() {
  return (
    <div className="bg-gray-800 text-3xl text-white p-4 rounded-sm">
      <UserContextProvider>
        <h1>Welcome to React Code</h1>
        <Login />
        <Profle />
      </UserContextProvider>
    </div>
  );
}

export default App;
