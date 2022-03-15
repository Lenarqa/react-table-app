import React, { useEffect, useState } from "react";
import usersJson from "../data/users.json";
import organisationsJson from "../data/organisations.json";

export const UserContext = React.createContext({
  isLoading: true,
  users: [],
  organisation: [],
  addUser: () => {},
  addSelectedUser: (id) => {},
  deleteUser: () => {},
  editUser: () => {},
});

const UserContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [organisation, setOrganisation] = useState(
    organisationsJson.organisations
  );

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      setUsers(usersJson.users);
    } else {
      let users = JSON.parse(localStorage.getItem("users"));
      setUsers(users);
    }
    setIsLoading(false);
  }, []);

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

    setUsers((prev) => {
      let updatedUsers = [
        {
          id: Math.random(),
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
          organisationId: parseInt(organisationId),
          email: email,
        },
        ...prev,
      ];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
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
  };

  const deleteSelectedUsersHandler = () => {
    setUsers((prev) => {
      selectedUsers.map((id) => {
        prev = prev.filter((user) => user.id !== id);
      });
      localStorage.setItem("users", JSON.stringify(prev));
      return prev;
    });
    setSelectedUsers([]);
  };

  const editUserHandler = (editUser) => {
    setUsers((prev) => {
      let updateUser = prev.filter((user) => user.id !== editUser.id);
      localStorage.setItem("users", JSON.stringify([editUser, ...updateUser]));
      return [editUser, ...updateUser];
    });
  };

  const contextValue = {
    isLoading: isLoading,
    users: users,
    organisation: organisation,
    addUser: addUserHandler,
    addSelectedUser: selectUserHandler,
    deleteUser: deleteSelectedUsersHandler,
    editUser: editUserHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
