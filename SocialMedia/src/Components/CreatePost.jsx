import React, { useRef,useContext } from "react";
import {PostList} from "../Stores/Post-List-Store";
const CreatePost = () => {
  const {addPost}=useContext(PostList);
  const UserId=useRef();
  const Title=useRef();
  const body=useRef();
  const Reactions=useRef();
  const Tags=useRef();

  const formHandlilng=(event)=>
  {
    event.preventDefault();
   const useIdData=UserId.current.value;
   const TitleData=Title.current.value;
   const bodyData=body.current.value;
   const ReactionsdData=Reactions.current.value;
   const TagsdData=Tags.current.value.split(" ");
   UserId.current.value="";
   Title.current.value="";
   body.current.value="";
   Reactions.current.value="";
   Tags.current.value="";

   addPost(useIdData,TitleData,bodyData,ReactionsdData,TagsdData);
  }
  return (
    <div className="form-continer">
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
          <label for="reactions">Reactions</label>
          <input
            ref={Reactions}
            type="number"
            className="form-control"
            id="reactions"
            placeholder="Enter reactions"
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
