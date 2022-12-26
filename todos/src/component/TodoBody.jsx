// 몸체
import styled from "styled-components";
import {useTodoState} from "../context/todos";
import TodoItem from "./TodoItem";

function TodoBody() {
    const todos = useTodoState();

    return (
        <Body> {
            todos.map((todo) => (
                <TodoItem todo={todo}
                    key={
                        todo.id
                    }/>
            ))
        } </Body>
    );
}

const Body = styled.ul `
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: 1px solid #fff;
`;

export default TodoBody;
