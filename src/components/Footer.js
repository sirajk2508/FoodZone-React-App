import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <h3 className="p-10 pl-20 ml-6 mr-6 m-10 mt-4 bg-blue-50 rounded-xl shadow-xl">
      This site is developed by {user.name} - {user.email} &copy; 2024 FoodZone. All rights reserved.
    </h3>
  );
};
