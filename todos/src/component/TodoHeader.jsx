//헤더
import { useTodoState } from "../context/todos";
import Todos from "./Todos";
import styled from "styled-components";

function TodoHeader() {
  const date = new Date();
  const dateStr = date.toLocaleDateString("ko-KR", { dateStyle: "full" });

  //   const todos = useTodoState();

  //   const doneCount = todos.filter((todo)=>todo.done).length;
  return (
    <Header>
      <div style={{ justifyContent: "center" }}>{dateStr}</div>
      <div>완료: 3/3</div>
      {/* <div>완료: {doneCount} : {Todos.length}</div> */}
    </Header>
  );
}

const Header = styled.div`
  text-align: center;
  border-bottom: 1px solid #000;
`;

export default TodoHeader;
