import Post from './Post'
import WelcomeMsg from './WelcomeMsg';
import { useLoaderData } from 'react-router-dom';
const PostList = () => 
  {
   const postList= useLoaderData();
  return (
  <>
    {postList.length==0 && <WelcomeMsg/>}
    {postList.map((post)=><Post key={post.id} post={post}/>)}
  </>
  )
};

export const PostLoader=async()=>
{
 return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => 
    {
        console.log("ye hai postlist ka data",data.posts);
        return data.posts;
    });
};

export default PostList;


