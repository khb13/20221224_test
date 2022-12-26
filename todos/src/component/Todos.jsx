import styled from "styled-components";
import { TodoProvier } from "../context/todos";
import TodoBody from "./TodoBody";
import TodoCreate from "./TodoCreate";
import TodoHeader from "./TodoHeader";

function Todos() {
  return (
    <TodoProvier>
      <TodosBlock>
        <TodoHeader />
      <TodoBody />
      <Todiv>
        <TodoCreate />
      </Todiv>
      
      </TodosBlock>
      
    </TodoProvier>
  );
}

const TodosBlock = styled.div`
  display:flex;
  flex-direction: column;
  width: 300px;
  height: 700px;

`

const Todiv = styled.div`
  padding: 5px 0px;
`



export default Todos;
