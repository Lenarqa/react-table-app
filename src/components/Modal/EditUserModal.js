import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../store/userContext";
import Button from "../UI/Button";
import ErrorText from "../UI/ErrorText";
import { Transition } from "react-transition-group";

const StyledEditUserModar = styled.form`
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

const EditUserModal = (props) => {
  const userCtx = useContext(UserContext);

  const [firstName, setFirstName] = useState(props.user.firstName);
  const [lastName, setLastName] = useState(props.user.lastName);
  const [middleName, setMiddleName] = useState(props.user.middleName);
  const [organisationId, setOrganisationId] = useState(
    props.user.organisationId
  );
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Что то пошло не так...");
  const [email, setEmail] = useState(props.user.email);

  const validationHandler = (e) => {
    e.preventDefault();

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      organisationId === -1 ||
      organisationId === "" ||
      email.trim() === ""
    ) {
      setErrorMsg("Не все поля заполнены!");
      setIsError(true);
      return;
    }

    if (!email.includes("@")) {
      setErrorMsg("Поле E-mail обязательно должно содержать символ @");
      setIsError(true);
      return;
    }
    console.log(organisationId);

    userCtx.editUser({
      id: props.user.id,
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      organisationId: parseInt(organisationId),
      email: email,
    });
    props.onClose();
  };

  const changeFirstNameHandler = (e) => {
    e.preventDefault();
    setIsError(false);
    setFirstName(e.target.value);
  };

  const changeLastNameHandler = (e) => {
    e.preventDefault();
    setIsError(false);
    setLastName(e.target.value);
  };

  const changeMiddleNameHandler = (e) => {
    e.preventDefault();
    setIsError(false);
    setMiddleName(e.target.value);
  };

  const changeOrganisationIdHandler = (e) => {
    e.preventDefault();
    setIsError(false);
    setOrganisationId(e.target.value);
  };

  const changeEmailHandler = (e) => {
    e.preventDefault();
    setIsError(false);
    setEmail(e.target.value);
  };

  return (
    <StyledEditUserModar onSubmit={validationHandler}>
      <header>
        <h2>Редактировать пользователя</h2>
      </header>
      <DataInputs>
        <div>
          <label htmlFor="firstName">Фамилия</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={changeFirstNameHandler}
          />
        </div>
        <div>
          <label htmlFor="lastName">Имя</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={changeLastNameHandler}
          />
        </div>
        <div>
          <label htmlFor="middleName">Отчество</label>
          <input
            id="lastName"
            type="text"
            value={middleName}
            onChange={changeMiddleNameHandler}
          />
        </div>
        <div>
          <label htmlFor="organisationId">Организация</label>
          <select
            id="organisationId"
            value={organisationId}
            onChange={changeOrganisationIdHandler}
          >
            {userCtx.organisation.map((org) => (
              <option key={org.id} value={org.id}>
                {org.shortName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={changeEmailHandler}
          />
        </div>
      </DataInputs>
      <Transition in={isError} timeout={1000}>
        {(state) => <ErrorText state={state}>{errorMsg}</ErrorText>}
      </Transition>
      <Actions>
        <Button type="submit">Ок</Button>
        <Button onClick={props.onClose}>Отмена</Button>
      </Actions>
    </StyledEditUserModar>
  );
};

export default EditUserModal;
