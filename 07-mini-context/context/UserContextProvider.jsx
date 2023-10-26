import React from "react";
import UserContext from "./UserContext";

function UserContextProvider({ childern }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {childern}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
