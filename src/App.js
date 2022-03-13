import React, { useContext, useState } from "react";
import styled from "styled-components";
import ActionsSection from "./components/ActionsSection";
import Button from "./components/UI/Button";
import Table from "./components/Table/Table";
import { UserContext } from "./store/userContext";
import AddUserModal from "./components/Modal/AddUserModal";
import LoadingIndicator from "./components/UI/LoadingIndicator";

const StyledApp = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

function App() {
  const userCtx = useContext(UserContext);
  const [isAddUser, setIsAddUser] = useState(false);

  const openAddUser = () => {
    setIsAddUser(true);
  };

  const closeAddUser = () => {
    setIsAddUser(false);
  };

  return (
    <StyledApp>
      {userCtx.isLoading && <LoadingIndicator />}
      {!userCtx.isLoading && (
        <>
          <ActionsSection>
            <Button onClick={openAddUser}>Добавить пользователя</Button>
          </ActionsSection>
          <Table users={userCtx.users} />
          {isAddUser && <AddUserModal onClose={closeAddUser} />}
        </>
      )}
    </StyledApp>
  );
}

export default App;
