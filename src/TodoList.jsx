import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const newTodos = [...todos, { task, id: Date.now() }];
        setTodos(newTodos);
    };

    const removeTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
            ))}
        </div>
    );
}

export default TodoList;
