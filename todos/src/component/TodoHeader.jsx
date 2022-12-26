//헤더
import { useTodoState } from "../context/todos";
import Todos from "./Todos";
import styled from "styled-components";

function TodoHeader() {
  const date = new Date();
  const dateStr = date.toLocaleDateString("ko-KR", { dateStyle: "full" });

    const todos = useTodoState();

    const doneCount = todos.filter((todo)=>todo.done).length;
  return (
    <Header>
      <Day>{dateStr}</Day>
      {/* <div>완료: 3/3</div> */}
      <Dones>완료: {doneCount} / {todos.length}</Dones>
    </Header>
  );
}

const Header = styled.div`
  text-align: center;
  border-bottom: 1px solid #000;
`;

const Day = styled.div`
  font-size: 1rem;
`

const Dones = styled.div`
  padding-bottom: 5px;
  font-size: 0.8rem;
`

export default TodoHeader;
