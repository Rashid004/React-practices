/** @format */

import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";
import { useState } from "react";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 bg-slate-900 p-4  mt-8 flex items-center justify-between rounded-md"
    >
      <input
        type="text"
        className="w-full py-4 px-2 rounded-md outline-none focus:border-indigo-500 focus:ring-1 focus:right-2 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white px-6 bg-blue-700 rounded-md text-nowrap py-4 border-none hover:bg-blue-800 transition-all"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
