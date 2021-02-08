import React  from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
    todos: Todo[],
    toggleTodo: ToggleTodo,
    deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo}) => {
    return(
        <ul>
            {todos.map( (todo, index) => (
                <div>
                    <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} /> 
                    <button onClick={() => {
                        deleteTodo(todo)
                    }}>delete</button>
                </div>
            ))}
        </ul>
    );
}

export default TodoList;