import Footer from "../Components/Footer.jsx";//./Components/Footer
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "./App.css";
import { useState } from "react";
import PostListProvider from "../Stores/Post-List-Store.jsx";//./Stores/Post-List-Store
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
    <div className="apna-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="content">
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
          <Outlet/>
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
