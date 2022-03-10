import React, { useEffect, useState, useCallback } from "react";
import usersJson from "../data/users.json";
import organisationsJson from "../data/organisations.json"

export const UserContext = React.createContext({
    isLoading: true,
    users: [],
    organisation: [],
});

const UserContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState(usersJson.users);
    const [organisation, setOrganisation] = useState(
        organisationsJson.organisations
      );
   
    const contextValue = {
      isLoading: isLoading,
      users: users,
      organisation: organisation,
    };
  
    return (
      <UserContext.Provider value={contextValue}>
        {props.children}
      </UserContext.Provider>
    );
  };
  
  export default UserContextProvider;


