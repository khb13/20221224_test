import { createContext, useContext, useReducer } from "react";

const initialState = [
  { id: 1, text: "1-1", done: true },
  { id: 2, text: "2-1", done: false },
  { id: 3, text: "3-1", done: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

export function TodoProvier({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw Error("provider없음");
  return context;
}

export function useDispatchState() {
  const context = useContext(TodoDispatchContext);
  if (!context) throw Error("provider없음");
  return context;
}
