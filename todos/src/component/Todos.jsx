import { TodoProvier } from "../context/todos";
import TodoBody from "./TodoBody";
import TodoCreate from "./TodoCreate";
import TodoHeader from "./TodoHeader";

function Todos() {
  return (
    <TodoProvier>
      <TodoHeader />
      <TodoBody />
      <TodoCreate />
    </TodoProvier>
  );
}

export default Todos;
