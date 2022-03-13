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
  isSelected: (userId) => {},
  // removeSelectedUserIfModalClose: () => {},
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
    console.log("selectedId = ", userId);
    setSelectedUsers((prev) => {
      let newUsersId = [];
      if (prev.includes(userId)) {
        newUsersId = prev.filter((id) => id !== userId);
        return newUsersId;
      } else {
        return [...prev, userId];
      }
    });
    console.log(selectedUsers);
  };

  const removeSelectedUserIfModalClose = () =>{
    setSelectedUsers(prev => prev.pop());
  }

  const isSelectedHadler = (userId) => {
    if(selectedUsers.includes(userId)){
      return true;
    }else {
      return false;
    }
  }

  const deleteSelectedUsersHandler = () => {
    console.log(selectedUsers);
    setUsers((prev) => {
      selectedUsers.map((id) => {
        prev = prev.filter((user) => user.id !== id);
      });
      return prev;
    });
    setSelectedUsers([]);
  };

  const contextValue = {
    isLoading: isLoading,
    users: users,
    organisation: organisation,
    addUser: addUserHandler,
    addSelectedUser: selectUserHandler,
    deleteUser: deleteSelectedUsersHandler,
    isSelected: isSelectedHadler,
    // removeSelectedUserIfModalClose: removeSelectedUserIfModalClose
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
