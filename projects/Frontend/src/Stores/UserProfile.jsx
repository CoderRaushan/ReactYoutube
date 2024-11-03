import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();
import Cookies from "js-cookie";
const ContextProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    // const token = Cookies.get("jwt");
    // console.log("token is:",token);
    // if (token) 
    // {
      axios
      .get("http://localhost:8243/user/getdata", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setUserData({
          _id: response.data.userId,
          name: response.data.name,
          email: response.data.email,
        });
        setIsAuthenticated(true);
        console.log("yaha tak to aaya hai");
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        Cookies.remove('jwt');
        setIsAuthenticated(false);
        setUserData({ _id: "", name: "", email: "" });
      });
    // }
    // else 
    // {
    //   console.log("token is not in the browser!");
    // }
  }, []);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
