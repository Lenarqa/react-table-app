import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import organisationsJson from "../../data/organisations.json";

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
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
  const [organisation, setOrganisation] = useState(
    organisationsJson.organisations
  );
  const [selected, setSelected] = useState(false);

  const curOrganisation = organisation.find(
    (org) => org.id === props.organisationId
  );

  const selectHandler = () => {
    setSelected((prev) => !prev);
  };

  return (
    <StyledRow onClick={selectHandler} selected={selected}>
      <RowCell>{props.name}</RowCell>
      <RowCell>{curOrganisation.shortName}</RowCell>
      <RowCell>{props.eMail}</RowCell>
      <RowCell isLast={true}>
        <FontAwesomeIcon
          icon={faPencilAlt}
          onClick={() => console.log("Редактировать")}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => console.log("Удалить")}
        />
      </RowCell>
    </StyledRow>
  );
};

export default Row;
