import React, { useState, useContext } from "react";
import styled from "styled-components";
import Row from "./Row";
import TableHeader from "./TableHeader";
import DeleteModal from "../Modal/DeleteModal";
import { UserContext } from "../../store/userContext";

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-bottom: none;
`;

const Table = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const userCtx = useContext(UserContext);

  const closeHandler = () => {
    console.log("Закрыть");
    setIsDelete(false);
  };

  const openHandler = () => {
    setIsDelete(true);
  };

  const deleteHandler = () => {
    userCtx.addSelectedUser();
    userCtx.deleteUser();
    setIsDelete(false);
  };

  return (
    <StyledTable>
      <TableHeader />
      {props.users.map((user) => {
        const name = `${user.firstName} ${user.lastName
          .toString()
          .substring(0, 1)}.${user.middleName.toString().substring(0, 1)}.`;
        return (
          <Row
            key={user.id}
            id={user.id}
            name={name}
            organisationId={user.organisationId}
            eMail={user.email}
            onDelete={openHandler}
          />
        );
      })}
      {isDelete && (
        <DeleteModal onClose={closeHandler} onDelete={deleteHandler} />
      )}
    </StyledTable>
  );
};

export default Table;
