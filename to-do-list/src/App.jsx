import React, { useState } from 'react';
import './styles.css';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>My Todo List</h1>
      
      <form className="new-form" onSubmit={addTodo}>
        <div className="new-form-group">
          <label htmlFor="new-todo">New Item</label>
          <input
            id="new-todo"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="new-todo"
            placeholder="Enter a new todo..."
          />
          <button type="submit" className="btn">Add</button>
        </div>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="todo-text">{todo.text}</span>
            </label>
            <button className="btn delete-btn" onClick={() => deleteTodo(todo.id)}>
              <i className="icon danger delete">×</i> {/* Or use an icon library like Font Awesome */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;