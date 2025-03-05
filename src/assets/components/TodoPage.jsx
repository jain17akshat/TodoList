import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useTodo } from "../../Context/TodoContext";  

import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
    const { todos } = useTodo();
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-center">Manage Your Todos</h1>
                    <button className="bg-red-500 px-3 py-1 rounded" onClick={() => { logout(); navigate("/"); }}>
                        Logout
                    </button>
                </div>
                <TodoForm />
                <div className="flex flex-wrap gap-y-3">
                    {todos.map((todo) => (
                        <div key={todo.id} className="w-full">
                            <TodoItem todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoPage;
