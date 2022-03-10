import React from "react";
import styled from "styled-components";
import Row from "./Row";

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-bottom: none;
`;

const Table = (props) => {
  return (
    <StyledTable>
      <Row
        name="ФИО"
        organisationId="Организация"
        eMail="E-Mail"
        isHeader={true}
      />
      {props.users.map((user) => (
        <Row
          name={`${user.firstName} ${user.lastName} ${user.middleName}`}
          organisationId={user.organisationId}
          eMail={user.email}
          isHeader={false}
        />
      ))}
    </StyledTable>
  );
};

export default Table;
