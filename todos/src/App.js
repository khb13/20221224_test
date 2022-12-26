import styled, {createGlobalStyle} from "styled-components";
import Todos from "./component/Todos";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px; padding: 0px;
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }
`;
const Back = styled.div`
  background-color: #eee;
  width: 300px;
  height: 500px;
  justify-content: "center";
  align-items: "center";
  display: flex;
`;

function App() {
    return (
        <div>
            <Back>
                <GlobalStyle/>
                <Todo>
                  <Title>
                    TodoList
                  </Title>
                    
                    <Todos/>
                </Todo>
            </Back>
        </div>
    );
}

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
`;

const Title = styled.div`
  font-size: 0.5rem;
  font-weight: bold;
  color: #888;
`

export default App;
