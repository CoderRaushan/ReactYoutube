import { Form, redirect } from "react-router-dom";
import { PostList  } from "../Stores/Post-List-Store";
import { useContext } from "react";

const CreatePost = () => 
  {
    const {addPost} = useContext(PostList);
  return (
    <div className="form-continer">
      <Form method="post">
        <div className="form-group">
          <label for="userId">UserId</label>
          <input
            name="userId"
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter UserId"
          />
        </div>{" "}
        <br />
        <div className="form-group">
          <label for="title">Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Title"
          />
        </div>{" "}
        <br />
        <div className="form-group">
          <label for="Description">Description</label>
          <input
            name="body"
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
            name=""
            type="number"
            className="form-control"
            id="likes"
            placeholder="Enter Likes"
          />
        </div>
        <br />
        <div className="form-group">
          <label for="reactions">disLikes</label>
          <input
            name="disLikes"
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
            name="Views"
            type="number"
            className="form-control"
            id="views"
            placeholder="Enter Views"
          />
        </div>
        <br />
        <div className="form-group">
          <label for="tags">Tags</label>
          <input
            name="tags"
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter Tags"
          />
        </div>{" "}
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export const CreatePostAction=async(data)=>
{
  const FomData=await data.request.formData()
  const PostData=Object.fromEntries(FomData);
  console.log("ye hai yaha ka deta",PostData);
  PostData.tags= PostData.tags.split(" ");
   fetch("https://dummyjson.com/posts/add", 
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(PostData),
  })
    .then((res) => res.json())
    .then((res)=>{
      console.log(res);
    });
  
  return redirect("/");
};
export default CreatePost;
