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
            user={user}
          />
        );
      })}
    </StyledTable>
  );
};

export default Table;
