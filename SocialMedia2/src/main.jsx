import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  CreatePost from './Components/CreatePost.jsx';
import  PostList  from './Components/PostList.jsx';
import { PostLoader}  from './Components/PostList.jsx'; //PostList
import  { CreatePostAction } from './Components/CreatePost.jsx';
const Router=createBrowserRouter(
  [
      {path:"/",element:<App />,children:[
      {path:"/", element:<PostList/>,loader:PostLoader},
      {path:"/CreatePost", element:<CreatePost />,action:CreatePostAction}
    ]},
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Router}/>
  </StrictMode>,
);
