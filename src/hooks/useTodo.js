import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useTodo = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos((previous) => [...previous, { text, completed: false }]);
  };

  const changeStatus = (index) => {
    setTodos((previous) => {
      const newState = [...previous].map((todo, i) => {
        if (i === index) {
          todo.completed = !todo.completed;
        }

        return todo;
      });

      return newState;
    });
  };

  return {
    todos,
    addTodo,
    changeStatus,

    filter,
    setFilter,
  };
};

export default useTodo;
