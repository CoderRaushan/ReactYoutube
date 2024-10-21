import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import PostList from './Components/PostList.jsx';
import CreatePost from './Components/CreatePost.jsx';
const Router=createBrowserRouter(
  [
      {path:"/SocialMediaAPP",element:<App />,children:[
      {path:"/SocialMediaAPP", element:<PostList/>},
      {path:"/SocialMediaAPP/CreatePost", element:<CreatePost />}
    ]},
  ]
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
