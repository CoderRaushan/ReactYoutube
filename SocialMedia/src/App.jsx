import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Stores/Post-List-Store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
    <div className="apna-container">
      <Sidebar />
      <div className="content">
        <Header/>
           <Outlet/>
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
