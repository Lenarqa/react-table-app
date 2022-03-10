import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const StyledDelete = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  width: 30rem;
  height: 10rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  height: 20%;
  width: 100%;
  border-bottom: 1px solid black;
  text-align: center;
`;

const Actions = styled.div`
  height: 60%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

const DeleteModal = (props) => {
  return (
    <StyledDelete>
      <Header>
        <h2>Удалить?</h2>
      </Header>
      <Actions>
        <Button onClick={props.onClose}>Нет</Button>
        <Button onClick={props.onDelete}>Да</Button>
      </Actions>
    </StyledDelete>
  );
};

export default DeleteModal;
