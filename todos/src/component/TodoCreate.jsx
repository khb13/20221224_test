//입력 제작
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useDispatchState } from "../context/todos";
import { useInputs } from "../hooks/useInputs";

function TodoCreate() {
  const [inputs, onChange, reset] = useInputs({
    text: "",
  });

  const dispatch = useDispatchState();

  const { text } = inputs;
  const nextId = useRef(4);

  const handleSubmit = () => {
    dispatch({ type: "CREATE_TODO", id: nextId.current, text });
    reset();
    nextId.current++;
  };

  return (
    <CreateBox>
      <input name="text" value={text} onChange={onChange}></input>
      <button onClick={handleSubmit}>입력</button>
    </CreateBox>
  );
}

const CreateBox = styled.div`
  justify-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TodoCreate;
