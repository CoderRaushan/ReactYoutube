import React, {useContext} from 'react'
import Post from './Post'
import { PostList as PostData } from '../Stores/Post-List-Store'

const PostList = () => {
  const {postList}=useContext(PostData);
  console.log(postList);
  return (
  <>
    {postList.map((post)=><Post key={post.id} post={post}/>)}
  </>
  )
};

export default PostList;


