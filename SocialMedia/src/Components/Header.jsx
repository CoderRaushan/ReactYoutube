import PostList from "./PostList";
import CreatePost from "./CreatePost";
const Header=({selectedTab,setSelectedTab})=>
{
  {selectedTab==="Home"?<PostList/> : <CreatePost />}
   return <nav class="navbar navbar-dark bg-dark fixed-top header_ ">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">Social Media</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div  class="offcanvas offcanvas-start text-bg-dark sidebarWidth" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
       <div class="offcanvas-header">
         <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Social Media</h5>
         <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
       </div>
       <div class="offcanvas-body">
         <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
           <li class="nav-item">
             <a class="nav-link" aria-current="page" style={{cursor:"pointer"}} onClick={()=>setSelectedTab("Home")}>Home</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" onClick={()=>setSelectedTab("Create Post")} style={{cursor:"pointer"}} >Create Post</a>
           </li>
         </ul>
         <form class="d-flex mt-3" role="search">
           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           <button class="btn btn-success" type="submit">Search</button>
         </form>
       </div>
     </div>
   </div>
 </nav>
}
export default Header;