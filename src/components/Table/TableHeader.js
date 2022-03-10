import React from "react";
import styled from "styled-components";

const StyledTableHeader = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: #ccc;
`;

const RowCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isLast ? "space-around" : "center")};
  font-size: 1.8rem;
  padding: 10px 0;
  border-right: ${(props) => (props.isLast ? "" : "1px solid black")};
  width: ${(props) => (props.isLast ? "10%" : "30%")};
`;

const TableHeader = (props) => {
  return (
    <StyledTableHeader>
      <RowCell>ФИО</RowCell>
      <RowCell>Организация</RowCell>
      <RowCell>E-Mail</RowCell>
      <RowCell isLast={true}></RowCell>
    </StyledTableHeader>
  );
};

export default TableHeader;
