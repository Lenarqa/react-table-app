import React, { useEffect, useState, useCallback } from "react";
import usersJson from "../data/users.json";
import organisationsJson from "../data/organisations.json";

export const UserContext = React.createContext({
  isLoading: true,
  users: [],
  organisation: [],
  addUser: () => {},
  addSelectedUser: (id) => {},
  deleteUser: () => {},
});

const UserContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(usersJson.users);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [organisation, setOrganisation] = useState(
    organisationsJson.organisations
  );

  const addUserHandler = (
    firstName,
    lastName,
    middleName,
    organisationId,
    email
  ) => {
    if (!middleName) {
      middleName = "";
    }

    setUsers((prev) => [
      {
        id: Math.random(),
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        organisationId: parseInt(organisationId),
        email: email,
      },
      ...prev,
    ]);
  };

  const selectUserHandler = (userId) => {
    setSelectedUsers((prev) => {
      let newUsersId = [];
      if (prev.includes(userId)) {
        newUsersId = prev.filter((id) => id !== userId);
        return newUsersId;
      } else {
        return [...prev, userId];
      }
    });
  };

  const deleteSelectedUsersHandler = (userId) => {
    setUsers((prev) => {
      let updatedUsers;
      selectedUsers.map((id) => {
        prev = prev.filter((user) => user.id !== id);
      });
      return prev;
    });
    console.log(users);
    setSelectedUsers([]);
  };

  const contextValue = {
    isLoading: isLoading,
    users: users,
    organisation: organisation,
    addUser: addUserHandler,
    addSelectedUser: selectUserHandler,
    deleteUser: deleteSelectedUsersHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
