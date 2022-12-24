import { Children, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatchState } from "../context/todos";

//내용 관리?
function TodoItem({ todo }) {
  const { id, text, done } = todo;

  const dispatch = useDispatchState();

  const handleRemove = () => {
    dispatch = { type: "REMOVE_TODO", id };
  };

  return (
    <div>
      <ItemBlock done={done} onClick={() => ({ type: "TOGGLE_TODO", id })}>
        {text}
      </ItemBlock>
      <Trash onClick={handleRemove}>삭제</Trash>
    </div>
  );
}

const ItemBlock = styled.li`
  ${({ done }) =>
    done &&
    css`
      color: white;
    `}
`;

const Trash = styled.button``;

export default TodoItem;
