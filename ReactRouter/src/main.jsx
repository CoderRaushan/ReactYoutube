import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreatePost from './Components/CreatePost.jsx';
import  PostList  from './Components/PostList.jsx';

const Router=createBrowserRouter(
  [
      {path:"/",element:<App />,children:[
      {path:"/", element:<PostList/>},
      {path:"/CreatePost", element:<CreatePost />}
    ]},
   
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Router}/>
  </StrictMode>,
)
