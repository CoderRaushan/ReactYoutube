import React, { useContext, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from "react-router-dom";
import { UserContext } from "../Stores/UserProfile";
const Login = () => {
  const { userData, setUserData, isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = { email, password };

    axios
      .post("http://localhost:8243/user/login", data, { withCredentials: true })
      .then((response) => {
        const message = response.data.message;
        console.log(response.data);
        setUserData({ _id: response.data._id, name:response.data.name, email:response.data.email});
        setIsAuthenticated(true);
        toast.success(message, 
        {
          position: "top-center", 
          autoClose: 3000,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, 
        {
          position: "top-center",
          autoClose: 3000,
        });
        console.error(error);
      });
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="col col-6 offset-3 mb-3 mt-5">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            ref={emailRef}
          />
        </div>
        <div className="col col-6 offset-3 mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </div>
        <div className="col col-6 offset-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
