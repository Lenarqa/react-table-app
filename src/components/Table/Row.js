import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../store/userContext";
import DeleteModal from "../Modal/DeleteModal";
import EditUserModal from "../Modal/EditUserModal";
import { useTransition, animated, Transition, config } from "react-spring";

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
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selected, setSelected] = useState(false);
  const userCtx = useContext(UserContext);

  const isDeleteTransition = useTransition(isDelete, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const curOrganisation = userCtx.organisation.find(
    (org) => org.id === props.organisationId
  );

  const openEditHandler = () => {
    setIsEdit(true);
  };

  const clouseEditHandler = () => {
    setIsEdit(false);
  };

  const closeDeleteHandler = () => {
    console.log("Close");
    userCtx.addSelectedUser(props.id);
    setIsDelete(false);
  };

  const openDeleteHandler = () => {
    setIsDelete(true);
    if (!selected) {
      userCtx.addSelectedUser(props.id);
    }
  };

  const selectHandler = () => {
    setSelected((prev) => !prev);
    userCtx.addSelectedUser(props.id);
  };

  const deleteHandler = () => {
    userCtx.deleteUser();
    setIsDelete(false);
  };

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
          onClick={openEditHandler}
        />
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faTrashAlt}
          onClick={openDeleteHandler}
        />
      </RowCell>

      {isDeleteTransition((style, item) =>
        item ? (
          <animated.div style={style}>
            <DeleteModal
              onClose={closeDeleteHandler}
              onDelete={deleteHandler}
            />
          </animated.div>
        ) : (
          ""
        )
      )}

      <Transition
        items={isEdit}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(styles, item) =>
          item && (
            <animated.div style={styles}>
              <EditUserModal onClose={clouseEditHandler} user={props.user} />
            </animated.div>
          )
        }
      </Transition>

      {/* {isEdit && (
        <EditUserModal onClose={clouseEditHandler} user={props.user} />
      )} */}
    </StyledRow>
  );
};

export default Row;
