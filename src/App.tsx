import { TodoCounter } from "./components/todo/TodoCounter";
import { TodoSearch } from "./components/todo/TodoSearch";
import { TodoList } from "./components/todo/TodoList";
import { TodoItem } from "./components/todo/TodoItem";
import { CreateTodoButton } from "./components/todo/CreateTodoButton";
import "./App.css";

const defaultTodos = [
  {
    text: "Bailar",
    completed: false,
  },
  {
    text: "reir",
    completed: false,
  },
];

function App() {
  return (
    <>
      <div className={"container"}>
        <TodoCounter total={10} completed={5} />
        <TodoSearch />
        <TodoList>
          {defaultTodos.map(todo => {
            return <TodoItem key={todo.text} text={todo.text} />
          })}
        </TodoList>
        <CreateTodoButton />
      </div>
    </>
  );
}

export default App;
