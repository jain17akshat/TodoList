import React from "react";
import { useTodo } from "./Context/TodoContext";
import TodoForm from "./assets/components/TodoForm";
import TodoItem from "./assets/components/TodoItem";
import "./App.css";

function TodoList() {
  const { todos } = useTodo(); 

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <TodoForm />
      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <p className="empty-message">No tasks added yet.</p>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
