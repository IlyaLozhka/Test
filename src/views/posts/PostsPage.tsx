import React, { FC, useCallback, useEffect, useState } from 'react';
import { PostsTable } from '../../component/table/PostsTable';
import { usePosts } from '../../redux/users/posts/selector';
import { Post } from '../../redux/users/posts/reducer';
import { postFilter } from '../../assets/utils/postFilter';
import { postSort, SORT_TYPE } from '../../assets/utils/postSort';
import { useGetPosts } from '../../component/shared/hooks/useGetPosts';
import style from './PostsPage.module.css';
import { Select } from '../../component/shared/select/Select';

export const PostsPage: FC = () => {
  const { posts } = usePosts();
  const getPosts = useGetPosts();
  const [postData, setPostData] = useState<Array<Post>>([]);

  const selectValue = [5, 10, 15];

  const deletePost = (id: number) => {
    setPostData(postData.filter((element) => {
      return element.id !== id;
    }));
  };

  const changeSortType = useCallback((sortType: SORT_TYPE) => {
    console.log(postSort(postData, sortType));
    setPostData(postSort(postData, sortType));
  }, [postData]);

  const changeFilterValue = useCallback((value)  => {
    setPostData(postFilter(posts, value));
  }, [posts]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setPostData(postFilter(posts, selectValue[0]));
  }, [posts]);

  return (
    <div className={style.postPageWrapper}>
      <Select value={selectValue} onChange={changeFilterValue} label={'Number of posts'} />
      <PostsTable postData={postData} deletePost={deletePost} />
    </div>
  );
};
