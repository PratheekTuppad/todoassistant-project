import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import SummaryButton from './components/SummaryButton';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:4000/todos');
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app-container">
      <h1>📝 Todo Summary Assistant</h1>
      <TodoForm onAdd={fetchTodos} />
      <TodoList todos={todos} onUpdate={fetchTodos} />
      <SummaryButton />
    </div>
  );
}

export default App;
