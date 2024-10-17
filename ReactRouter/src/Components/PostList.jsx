import React, {useContext, useEffect, useState} from 'react'
import Post from './Post'
import { PostList as PostData } from '../Stores/Post-List-Store'
import WelcomeMsg from './WelcomeMsg';
import Spineer from './Spineer';
const PostList = () => {
  const {postList,spineer}=useContext(PostData);
  return (
  <>
    {spineer && <Spineer/>}
    {!spineer && postList.length==0 && <WelcomeMsg/>}
    {!spineer && postList.map((post)=><Post key={post.id} post={post}/>)}
  </>
  )
};

export default PostList;


