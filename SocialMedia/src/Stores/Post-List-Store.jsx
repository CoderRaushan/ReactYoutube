import {useContext} from 'react';

const PostList=useContext({});

const PostListProvider=({childrens})=>
{
    return <PostList.Provider value={[]}>
        {childrens}
    </PostList.Provider>;
}
export default PostListProvider;
