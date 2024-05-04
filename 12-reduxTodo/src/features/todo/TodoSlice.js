/** @format */

import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
  todos: [{ id: 1, text: "Hellow Behram!!" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const updateTodo = state.todos.find((todo) => todo.id === id);
      if (updateTodo) {
        updateTodo.text = newText;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
