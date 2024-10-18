import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiSolidLike,BiSolidDislike } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { PostList as PostData  } from "../Stores/Post-List-Store";

const Post = ({ post }) => {
  const { deletePost,IncLike,DecLike } = useContext(PostData);
  return (
    <>
    <div key={post.userId}  className="card post-card" style={{ width: "21rem" }}>
      <div className="card-body">
        <h5  key={post.userId} className="card-title">
          {post.title}
          <span 
            
            onClick={() => deletePost(post.id)}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            <RiDeleteBinLine />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p><IoEye /> {post.views}</p>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={post.userid} className="badge bg-primary">
            {tag}
          </span>
        ))}
        <span>
        <BiSolidLike onClick={()=>IncLike(post.id)}/> {post.reactions.likes} 
        </span>
       <span>
       <BiSolidDislike onClick={()=>DecLike(post.id)}/>  {post.reactions.dislikes}
       </span>
      </div>
    </div>
    </>
  );
};

export default Post;
