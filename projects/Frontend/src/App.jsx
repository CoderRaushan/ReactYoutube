// import '../App.css'
import Register from "./Components/Register";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Error from "./Components/Error";
import UserProfile from "./Components/UserProfile";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Footer/> */}
      {/* <UserPrifle/> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfile/>} />
        {/* <Route path="*" element={<Error/>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
