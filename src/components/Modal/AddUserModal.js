import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../store/userContext";
import Button from "../UI/Button";

const StyledAddUserModar = styled.div`
  width: 25rem;
  height: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;

  display: flex;
  padding: 5px;
  justify-content: flex-start;
  flex-direction: column;

  header {
    border-bottom: 1px solid black;
  }
`;

const AddUserModal = (props) => {
  const userCtx = useContext(UserContext);
  return (
    <StyledAddUserModar>
      <header>
        <h2>Добавить пользователя</h2>
      </header>
      <div>
        <div>
          <label htmlFor="">Фамилия</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Имя</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Отчество</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Организация</label>
          <select name="" id="">
            {userCtx.organisation.map((org) => (
              <option>{org.shortName}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">E-Mail</label>
          <input type="email" />
        </div>
      </div>
      <div>
        <Button>Ок</Button>
        <Button>Отмена</Button>
      </div>
    </StyledAddUserModar>
  );
};

export default AddUserModal;
