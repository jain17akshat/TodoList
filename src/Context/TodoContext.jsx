import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();  

export const useTodo = () => {  
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
   

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};
