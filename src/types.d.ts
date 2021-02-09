
interface Todo {
  text: string,
  completed: boolean,
}

interface ChatMessage {
  author: string;
  message: string;
}

interface ChatState {
  input: string;
  messages: ChatMessage[];
}

type ToggleTodo = (selectedTodo: todo) => void;

type AddTodo = (text:string) => void;

type DeleteTodo = (todo:Todo) => void;

type SignInWithGoogle = () => void;