
interface Todo {
  text: string,
  completed: boolean,
}

type ToggleTodo = (selectedTodo: todo) => void;

type AddTodo = (text:string) => void;

type DeleteTodo = (todo:Todo) => void;