import styled, { css } from "styled-components";
import { useDispatchState } from "../context/todos";

//내용 관리?
function TodoItem({ todo }) {
  const { id, text, done } = todo;

  const dispatch = useDispatchState();

  return (
    <div>
      <ItemBlock done={done} onClick={() => dispatch({ type: "TOGGLE_TODO", id })}>
        <p>
          {text}
        </p>
      <Trash onClick={() => dispatch({type: "REMOVE_TODO", id})}>삭제</Trash>
      </ItemBlock>
    </div>
  );
}

const ItemBlock = styled.li`
padding: 10px 10px;
border-bottom: 1px solid #fff;
align-items: center;
display: flex;
user-select: none;
p{
  flex: 1;
}

  ${({ done }) =>
    done &&
    css`
      color: #bbb;
    `}
`;

const Trash = styled.button``;

export default TodoItem;
