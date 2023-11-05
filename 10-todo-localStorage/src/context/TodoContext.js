import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {}, // its a function but defination is given in app.jsx
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleCompleted: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
