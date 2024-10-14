import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { PostList as PostData  } from "../Stores/Post-List-Store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostData);
  console.log(deletePost);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            onClick={() => deletePost(post.id)}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            <RiDeleteBinLine />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge bg-primary">
            {tag}
          </span>
        ))}
        <FaHeart /> {post.reactions}
      </div>
    </div>
  );
};

export default Post;
