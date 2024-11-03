import React, { useContext } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Stores/UserProfile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
const Header = () => {
  const navigate = useNavigate();
  const searchRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = searchRef.current.value;
    navigate(`/${search}`);
  };
  const { userData, setUserData, isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const Logout = () => {
    Cookies.remove('jwt');
    setIsAuthenticated(false); 
    setUserData(null);
    navigate('/login'); 
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Raus Privated Limited
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">Profile</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Link
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">Action</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Another action</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item">Something else here</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">
                  Link
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                ref={searchRef}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              &nbsp;
              <ToastContainer />
            </form>
            {!isAuthenticated ? (
              <>
                <Link to="/register">
                  <button className="btn btn-warning">SignUp</button>
                </Link>
                &nbsp;
                <Link to="/login">
                  <button className="btn btn-primary">LogIn</button>
                </Link>
              </>
            ) : (
              <button className="btn btn-success" onClick={Logout}>LogOut</button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
