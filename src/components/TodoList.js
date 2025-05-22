import React from 'react';

const TodoList = ({ todos, onUpdate }) => {
  const handleComplete = async (id) => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true }),
    });
    onUpdate();
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'done' : ''}>
          {todo.title}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>✅ Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
