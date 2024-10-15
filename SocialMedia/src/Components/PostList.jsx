import React, {useContext, useEffect} from 'react'
import Post from './Post'
import { PostList as PostData } from '../Stores/Post-List-Store'
import WelcomeMsg from './WelcomeMsg';

const PostList = () => {
  const {postList,addPostFromServer}=useContext(PostData);
  useEffect(()=>
  {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => 
    {
      addPostFromServer(data.posts)
    }
    );
  },[])
  return (
  <>
    {postList.length==0 && <WelcomeMsg/>}
    {postList.map((post)=><Post key={post.id} post={post}/>)}
  </>
  )
};

export default PostList;


