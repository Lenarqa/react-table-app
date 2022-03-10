import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: ${(props) => (props.isHeader ? "#ccc" : "white")};
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

const Row = (props) => {
  return (
    <StyledRow isHeader={props.isHeader}>
      <RowCell>{props.name}</RowCell>
      <RowCell>{props.organization}</RowCell>
      <RowCell>{props.eMail}</RowCell>
      <RowCell isLast={true}>
        {!props.isHeader && (
          <>
            <FontAwesomeIcon
              icon={faPencilAlt}
              onClick={() => console.log("Редактировать")}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              onClick={() => console.log("Удалить")}
            />
          </>
        )}
      </RowCell>
    </StyledRow>
  );
};

export default Row;
