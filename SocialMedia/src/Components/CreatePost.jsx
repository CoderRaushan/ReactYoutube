import React, { useRef,useContext } from "react";
import {PostList} from "../Stores/Post-List-Store";
const CreatePost = () => {
  const {addPost}=useContext(PostList);
  const UserId=useRef();
  const Title=useRef();
  const body=useRef();
  const Likes=useRef();
  const disLikes=useRef();
  const Views=useRef();
  const Tags=useRef();
  
  const formHandlilng = (event) => {
    event.preventDefault();
    
    const useIdData = UserId.current.value;
    const TitleData = Title.current.value;
    const bodyData = body.current.value;
    
    // Parse numbers properly
    const LikesData = parseInt(Likes.current.value, 10);
    const DisLikesData = parseInt(disLikes.current.value, 10);
    const ViewsData = parseInt(Views.current.value, 10);
    
    const TagsdData = Tags.current.value.split(" ");
    
    console.log("likes, dislikes, views", LikesData, DisLikesData, ViewsData);
    
    // Clear form inputs
    UserId.current.value = "";
    Title.current.value = "";
    body.current.value = "";
    Tags.current.value = "";
    Likes.current.value = "";
    disLikes.current.value = "";
    Views.current.value = "";
    
    // Pass the numeric values to addPost
    addPost(useIdData, TitleData, bodyData, TagsdData, LikesData, DisLikesData, ViewsData);
  };
  return (
    <div className="form-continer">
      <br /> <br />
      <form onSubmit={formHandlilng}>
      <div className="form-group">
          <label for="userId">UserId</label>
          <input
            ref={UserId}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter UserId"
          />
        </div> <br />
        <div className="form-group">
          <label for="title">Title</label>
          <input
            ref={Title}
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Title"
          />
        </div>  <br />
        <div className="form-group">
          <label for="Description">Description</label>
          <input
            ref={body}
            type="text"
            className="form-control"
            id="Description"
            placeholder="Enter Description"
          />
        </div> 
        <br />
        <div className="form-group">
          <label for="reactions">Likes</label>
          <input
            ref={Likes}
            type="number"
            className="form-control"
            id="Likes"
            placeholder="Enter Likes"
          />
        </div>
        <br />
        <div className="form-group">
          <label for="reactions">disLikes</label>
          <input
            ref={disLikes}
            type="number"
            className="form-control"
            id="disLikes"
            placeholder="Enter disLikes"
          />
        </div>
        <br />
        <div className="form-group">
          <label for="reactions">Views</label>
          <input
            ref={Views}
            type="number"
            className="form-control"
            id="Views"
            placeholder="Enter Views"
          />
        </div> 
        <br />
        <div className="form-group">
          <label for="tags">Tags</label>
          <input
            ref={Tags}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter Tags"
          />
        </div>  <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
