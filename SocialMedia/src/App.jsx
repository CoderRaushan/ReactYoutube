import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Stores/Post-List-Store";
function App() {
  const [selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
    <div className="apna-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="content">
        <Header />
           <div className="main_content">
           {selectedTab==="Home"?<PostList/> : <CreatePost />}
           </div>
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
