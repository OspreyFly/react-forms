import React from 'react';

function Todo({ todo, removeTodo }) {
    return (
        <div>
            {todo.task}
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    );
}

export default Todo;
