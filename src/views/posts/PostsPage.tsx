import React, { FC, useCallback, useEffect, useState } from 'react';
import { PostsTable } from '../../component/table/PostsTable';
import { usePosts } from '../../redux/users/posts/selector';
import { Post } from '../../redux/users/posts/reducer';
import { postFilter } from '../../assets/utils/postFilter';
import { postSort, SORT_TYPE } from '../../assets/utils/postSort';
import { useGetPosts } from '../../component/table/hooks/useGetPosts';
import style from './PostsPage.module.css';
import { Select } from '../../component/select/Select';

export const PostsPage: FC = () => {
  const { posts } = usePosts();
  const getPosts = useGetPosts();
  const [postData, setPostData] = useState<Array<Post>>([]);

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
    setPostData(postFilter(posts, 5));
  }, [posts]);

  return (
    <div className={style.postPageWrapper}>
      <Select changeSortType={changeSortType} changeFilterValue={changeFilterValue} />
      <PostsTable postData={postData} deletePost={deletePost} />
    </div>
  );
};
