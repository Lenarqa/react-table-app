import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ActionsSection from "./components/ActionsSection";
import Button from "./components/UI/Button";
import Table from "./components/Table/Table";

import usersJson from "./data/users.json";

const StyledApp = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  const [users, setUsers] = useState(usersJson.users);

  return (
    <StyledApp>
      <ActionsSection>
        <Button
          clickHandler={() => {
            console.log("Добавить пользователя");
          }}
        >
          Добавить пользователя
        </Button>
      </ActionsSection>
      <Table users={users}/>
    </StyledApp>
  );
}

export default App;
