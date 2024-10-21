import React, {useContext, useEffect, useState} from 'react'
import Post from './Post'
import { PostList as PostData } from '../Stores/Post-List-Store'
import WelcomeMsg from './WelcomeMsg';
const PostList = () => {
  const {postList}=useContext(PostData);
  return (
  <>
     <br /> <br /> <br />
    {postList.length==0 && <WelcomeMsg/>}
    {postList.map((post)=><Post key={post.id} post={post}/>)}
  </>
  )
};

export default PostList;


