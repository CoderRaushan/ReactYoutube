import { useReducer,createContext,useCallback} from 'react';

export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    IncLike:()=>{},
    DecLike:()=>{},
    deletePost:()=>{},
});

const PostListReducer=(currentPostList,action)=>
{
    switch (action.type) {
        case "DELETE":
          return currentPostList.filter((post) => post.id !== action.payload.postId);

        case "ADD":
            console.log(action.payload);
           return[action.payload,...currentPostList];
        
        case "ADD_FROM_SERVER":
           return action.payload.posts;
        case "INC_LIKE":
            const postId = action.payload.postId;
            return currentPostList.map(post =>
                post.id === postId ? { ...post, reactions: { ...post.reactions, likes: post.reactions.likes + 1 } } : post
            );
        case "DEC_LIKE":
            const posTId = action.payload.postId;
            return currentPostList.map(post =>
                post.id === posTId ? { ...post, reactions: { ...post.reactions, dislikes: post.reactions.dislikes - 1 } } : post
            );
        default:return currentPostList;
      }
}

const PostListProvider=({children})=>
{
    const [postList,dispatchPostList]=useReducer(PostListReducer,[]);
    const addPost=(posts)=>
    {
        dispatchPostList({
            type:"ADD",
            payload: posts,
        });
    }
    const addPostFromServer=(posts)=>
        {
            dispatchPostList({
                type:"ADD_FROM_SERVER",
                payload: 
                {
                    posts,
                },
            });
        }
    const deletePost=useCallback((postId)=>
    {
        dispatchPostList({
            type:"DELETE",
            payload:{
                postId,
            }
        });
    },[dispatchPostList]);

    const IncLike=(postId)=>
    {   
        console.log("post id is form dis:",postId)
        dispatchPostList({
            type:"INC_LIKE",
            payload:{
                postId,
            }
        });
    }
    const DecLike=(postId)=>
    {   
        console.log("post id is form dis:",postId)
        dispatchPostList({
            type:"DEC_LIKE",
            payload:{
                postId,
            }
        });
    }
    
    return (
    <PostList.Provider value={{postList,addPost,deletePost,
        IncLike,DecLike}}>
        {children}
    </PostList.Provider>
    );
}
export default PostListProvider;


