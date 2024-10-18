import PostList from "./PostList";
import CreatePost from "./CreatePost";
const Header=({selectedTab,setSelectedTab})=>
{
  {selectedTab==="Home"?<PostList/> : <CreatePost />}
   return <nav className="navbar fixed-top header_  ">
   <div className="container-fluid">
     <a className="navbar-brand" style={{color:"white"}} href="#">Social Media</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div  className="offcanvas offcanvas-start text-bg-dark sidebarWidth" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
       <div className="offcanvas-header">
         <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Social Media</h5>
         <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
       </div>
       <div className="offcanvas-body">
         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
           <li className="nav-item">
             <a className="nav-link" aria-current="page" style={{cursor:"pointer"}} onClick={()=>setSelectedTab("Home")}>Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" onClick={()=>setSelectedTab("Create Post")} style={{cursor:"pointer"}} >Create Post</a>
           </li>
         </ul>
         <form className="d-flex mt-3" role="search">
           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-success" type="submit">Search</button>
         </form>
       </div>
     </div>
   </div>
 </nav>
}
export default Header;