import React from "react";
import styled from 'styled-components';
import ActionsSection from "./components/ActionsSection";
import Button from './components/UI/Button';
import Table from "./components/Table";

const StyledApp = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid black;

` 


function App() {
  return (
    <StyledApp>
      <ActionsSection>
        <Button clickHandler={()=>{console.log("Hello");}}>Добавить пользователя</Button>
      </ActionsSection>
        <Table />
    </StyledApp>
  );
}

export default App;
