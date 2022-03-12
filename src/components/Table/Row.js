import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../store/userContext";

const StyledRow = styled.div`
  cursor: default;
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: ${(props) => (props.selected ? "#b2dcee" : "")};
`;

const RowCell = styled.div`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isLast ? "space-around" : "center")};
  font-size: 1.8rem;
  padding: 10px 0;
  border-right: ${(props) => (props.isLast ? "" : "1px solid black")};
  width: ${(props) => (props.isLast ? "10%" : "33%")};
`;

const Row = (props) => {
  const userCtx = useContext(UserContext);
  const [selected, setSelected] = useState(false);

  const curOrganisation = userCtx.organisation.find(
    (org) => org.id === props.organisationId
  );

  const selectHandler = () => {
    setSelected((prev) => !prev);
    userCtx.addSelectedUser(props.id);
  };

  const deleteHandler = () => {
    props.onDelete();
    userCtx.addSelectedUser(props.id);
  }

  return (
    <StyledRow selected={selected}>
      <div style={{ width: "100%", display: "flex" }} onClick={selectHandler}>
        <RowCell>{props.name}</RowCell>
        <RowCell>{curOrganisation.shortName}</RowCell>
        <RowCell>{props.eMail}</RowCell>
      </div>
      <RowCell isLast={true}>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faPencilAlt}
          onClick={() => console.log("Редактировать")}
        />
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faTrashAlt}
          onClick={deleteHandler}
        />
      </RowCell>
    </StyledRow>
  );
};

export default Row;
