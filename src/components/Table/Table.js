import React from "react";
import styled from "styled-components";
import Row from "./Row";
import TableHeader from "./TableHeader";

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-bottom: none;
`;

const Table = (props) => {
  return (
    <StyledTable>
      <TableHeader />
      {props.users.map((user) => (
        <Row
          key={user.id}
          name={`${user.firstName} ${user.lastName} ${user.middleName}`}
          organisationId={user.organisationId}
          eMail={user.email}
        />
      ))}
    </StyledTable>
  );
};

export default Table;
