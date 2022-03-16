import React, { useContext, useState } from "react";
import styled from "styled-components";
import ActionsSection from "./components/ActionsSection";
import Button from "./components/UI/Button";
import Table from "./components/Table/Table";
import { UserContext } from "./store/userContext";
import AddUserModal from "./components/Modal/AddUserModal";
import LoadingIndicator from "./components/UI/LoadingIndicator";
import Pagination from "./components/UI/Pagination";
import { Transition, animated } from "react-spring";

const StyledApp = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

function App() {
  const userCtx = useContext(UserContext);
  const [isAddUser, setIsAddUser] = useState(false);

  const [curPage, setCurPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);

  const indexLastRow = curPage * rowPerPage;
  const indexFirstRow = indexLastRow - rowPerPage;
  const curRows = userCtx.users.slice(indexFirstRow, indexLastRow);

  const paginateHangler = (pageNum) => {
    setCurPage(pageNum);
  };

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
          <Table users={curRows} />
          <Pagination
            totalRows={userCtx.users.length}
            rowPerPage={rowPerPage}
            paginate={paginateHangler}
          />
          <Transition
            items={isAddUser}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {(styles, item) =>
              item && (
                <animated.div style={styles}>
                  <AddUserModal onClose={closeAddUser} />
                </animated.div>
              )
            }
          </Transition>
          {/* {isAddUser && <AddUserModal onClose={closeAddUser} />} */}
        </>
      )}
    </StyledApp>
  );
}

export default App;
