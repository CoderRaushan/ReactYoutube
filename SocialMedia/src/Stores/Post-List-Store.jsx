import { useReducer,createContext} from 'react';

export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const PostListReducer=(currentPostList,action)=>
{
    switch (action.type) {
        case "DELETE":
          return currentPostList.filter((post) => post.id !== action.payload.postId);

        case "ADD":
           return[action.payload,...currentPostList];

        default:return currentPostList;
      }
}

const PostListProvider=({children})=>
{
    const [postList,dispatchPostList]=useReducer(PostListReducer,Default_Post_List);
    const addPost=(useIdData,TitleData,bodyData,ReactionsdData,TagsdData)=>
    {
        console.log(useIdData,TitleData,bodyData,ReactionsdData,TagsdData);
        dispatchPostList({
            type:"ADD",
            payload: 
            {
                "id": Date.now(),
                "title": TitleData,
                "body": bodyData,
                "reactions": ReactionsdData,
                "userId": useIdData,
                "tags": TagsdData,
            },
        });
    }
    const deletePost=(postId)=>
    {
        dispatchPostList({
            type:"DELETE",
            payload:{
                postId,
            }
        });
    }

    return (
    <PostList.Provider value={{postList,addPost,deletePost}}>
        {children}
    </PostList.Provider>
    );
}


const Default_Post_List=[
    {
        "id": "1",
        "title": "Waqt ki baatein",
        "body": "4 saal ki mehnat ke baad ab kuch samajh aaya hai. Time flies!",
        "reactions": 22,
        "userId": "user-01",
        "tags": ["Graduating", "Reflections"]
    },
    {
        "id": "2",
        "title": "Jashn ki tayyari",
        "body": "Graduation ke baad ki celebration kaafi khaas hoga. Are you ready?",
        "reactions": 18,
        "userId": "user-02",
        "tags": ["Graduating", "Celebration"]
    },
    {
        "id": "3",
        "title": "Dost ka sath",
        "body": "In 4 saalon mein sabse acha dosto se mila. Miss you all!",
        "reactions": 30,
        "userId": "user-03",
        "tags": ["Graduating", "Friendship"]
    },
    {
        "id": "4",
        "title": "Sapne ab sach honge",
        "body": "Degree haasil karna ek naya safar shuru karna hai. Excited!",
        "reactions": 25,
        "userId": "user-04",
        "tags": ["Graduating", "Future"]
    },
    {
        "id": "5",
        "title": "Hard work pays off",
        "body": "4 saal ki koshish ke baad aakhir kaar wo pal aa gaya. Proud!",
        "reactions": 28,
        "userId": "user-05",
        "tags": ["Graduating", "Achievement"]
    },
    {
        "id": "6",
        "title": "Shukriya sabko",
        "body": "Parents aur teachers ka shukriya, bina aapke yeh mumkin nahi hota.",
        "reactions": 20,
        "userId": "user-06",
        "tags": ["Graduating", "Gratitude"]
    },
    {
        "id": "7",
        "title": "Memories to cherish",
        "body": "In 4 saalon ki yaadein kabhi nahi bhool sakta. Cheers to memories!",
        "reactions": 26,
        "userId": "user-07",
        "tags": ["Graduating", "Memories"]
    },
    {
        "id": "8",
        "title": "Nayi chunautiyan",
        "body": "Graduation ke baad naye challenges ka samna karna hai. Bring it on!",
        "reactions": 19,
        "userId": "user-08",
        "tags": ["Graduating", "Challenges"]
    },
    {
        "id": "9",
        "title": "Tareeqon ka safar",
        "body": "4 saalon ka safar hai kuch khaas. Har pal yaad rahega!",
        "reactions": 23,
        "userId": "user-09",
        "tags": ["Graduating", "Journey"]
    },
    {
        "id": "10",
        "title": "Nayi shuruaat",
        "body": "Yeh graduation sirf ek shuruaat hai, aage aur bhi kuch karna hai!",
        "reactions": 29,
        "userId": "user-10",
        "tags": ["Graduating", "New Beginnings"]
    }
];


export default PostListProvider;


