/** @format */

import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charecter, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  // Using useCallback();

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (charecter) str += "!@#$%&*)+{}/?-~[];";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [charecter, number, length, setPassword]);

  const copyClipBoard = useCallback(() => {
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password);
  }, [password]);
  // Using useEffect();

  // useEffect(() => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  //   if (number) str += "0123456789";
  //   if (charecter) str += "!@#$%&*)+{}/?-~[];";

  //   for (let i = 0; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1);

  //     pass += str.charAt(char);
  //   }
  //   setPassword(pass);
  //   // passwordGenerate();
  // }, [charecter, number, length, setPassword]);

  useEffect(() => {
    passwordGenerate();
  }, [passwordGenerate, charecter, number, length]);

  return (
    <>
      <div className="w-full max-w-lg shadow-md  mx-auto text-orange-400 bg-gray-800 px-6 py-10 rounded-lg text-2xl ">
        <div className="flex overflow-hidden mb-4 shadow rounded-lg text-orange-700 ">
          <input
            value={password}
            type="text"
            className="outline-none px-3 py-2 w-full"
            readOnly
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            className=" bg-blue-700 text-white px-3 py-1 shrink-0 outline-none"
            onClick={copyClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={50}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              value={number}
              onChange={() => setNumber((num) => !num)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charecter}
              id="charInput"
              value={charecter}
              onChange={() => setCharacter((char) => !char)}
            />
            <label htmlFor="charInput">Charecters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
