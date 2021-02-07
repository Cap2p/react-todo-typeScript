import React from 'react'

interface Props {
  todo: Todo
  toggleTodo: ToggleTodo,
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return(
      <li>
          <label
          style={{textDecoration: todo.completed ? 'line-through' : undefined}}
          >
            <input 
            type="checkbox"
            checked={todo.completed}
            onClick = {() => toggleTodo(todo)}
            /> 
            {todo.text}
          </label>
      </li>
  )
}