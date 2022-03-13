import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { UserContext } from "../../store/userContext";
import Button from "../UI/Button";

const StyledAddUserModar = styled.form`
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
    height: 10%;
  }
`;

const DataInputs = styled.div`
  padding: 10px;
  height: 75%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  div {
    display: flex;
    width: 100%;
    padding: 10;
    margin: 10px 0;
  }

  div label {
    font-size: 1.2rem;
    margin-right: 10px;
    width: 20%;
  }

  div input {
    width: 60%;
    padding: 5px 10px;
    outline: none;
    font-size: 1.2rem;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 15%;
  padding: 10px;

  button {
    margin: 0 10px;
  }
`;

const AddUserModal = (props) => {
  const userCtx = useContext(UserContext);

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const middleNameRef = useRef("");
  const organisationIdRef = useRef(0);
  const emailRef = useRef("");

  const validationHandler = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const middleName = middleNameRef.current.value;
    const organisationId = organisationIdRef.current.value;
    const email = emailRef.current.value;

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      organisationId === 0 ||
      organisationId === "" ||
      email.trim() === ""
    ) {
      return;
    }

    if (!email.includes("@")) {
      console.log("Нет собачки!");
      return;
    }

    userCtx.addUser(firstName, lastName, middleName, organisationId, email);
    props.onClose();
  };

  return (
    <StyledAddUserModar onSubmit={validationHandler}>
      <header>
        <h2>Добавить пользователя</h2>
      </header>
      <DataInputs>
        <div>
          <label htmlFor="firstName">Фамилия</label>
          <input id="firstName" type="text" ref={firstNameRef} />
        </div>
        <div>
          <label htmlFor="lastName">Имя</label>
          <input id="lastName" type="text" ref={lastNameRef} />
        </div>
        <div>
          <label htmlFor="middleName">Отчество</label>
          <input id="lastName" type="text" ref={middleNameRef} />
        </div>
        <div>
          <label htmlFor="organisationId">Организация</label>
          <select id="organisationId" ref={organisationIdRef}>
            <option key={0} value={0}>Выберите организацию</option>
            {userCtx.organisation.map((org) => (
              <option key={org.id+1} value={org.id}>{org.shortName}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input id="email" type="text" ref={emailRef} />
        </div>
      </DataInputs>
      <Actions>
        <Button type="submit">Ок</Button>
        <Button onClick={props.onClose}>Отмена</Button>
      </Actions>
    </StyledAddUserModar>
  );
};

export default AddUserModal;
