import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy name",
    email: "dummyname@email.com",
  },
});
UserContext.displayName = "UserContext"


export default UserContext;
