import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import TodoList from './components/TodoList';

const initialState: Todo[] = [
  {
    text: "dede",
    completed:false,
  },
  {
    text: "dedfee",
    completed: true,
  },
]

function App() {
  const [todos, setTodos] = useState(initialState)
  const toggleTodo = (selectedTodo: Todo) =>  {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    });
    setTodos(newTodos)
  }
  const addTodo: AddTodo = (text: string) => {
    const newTodo = {
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }
  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
