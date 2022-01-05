import React, { FC, useCallback, useEffect, useState } from 'react';
import { usePosts } from '../../redux/users/posts/selector';
import { Post } from '../../redux/users/posts/reducer';
import { postFilter } from '../../assets/utils/postFilter';
import { useGetPosts } from '../../component/table/hooks/useGetPosts';
import style from './PostsPage.module.css';
import { Select } from '../../component/select/Select';
import { PostTableContainer } from '../../component/table/post/PostTableContainer';
import { TableHead } from '../../component/table/post/head/TableHead';
import { TableBody } from '../../component/table/post/body/TableBody';
import { sortById, sortByTitle } from '../../assets/utils/postSort';

export const PostsPage: FC = () => {

  const { posts } = usePosts();
  const getPosts = useGetPosts();
  const [postData, setPostData] = useState<Array<Post>>([]);

  const [sortDirectionID, setDirectionID] = useState(false);
  const [sortDirectionTitle, setDirectionTitle] = useState(false);

  const deletePost = (id: number) => {
    setPostData(postData.filter((element) => {
      return element.id !== id;
    }));
  };

  const changeSortId = useCallback(() => {
    setDirectionID(sortDirectionID => !sortDirectionID);
    setPostData(sortById(postData, sortDirectionID));
  }, [postData]);

  const changeSortTitle = useCallback(() => {
    setDirectionTitle(sortDirectionTitle => !sortDirectionTitle);
    setPostData(sortByTitle(postData, sortDirectionTitle));
  }, [postData]);


  const changeFilterValue = useCallback((value) => {
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
      <Select changeFilterValue={changeFilterValue} />
      <PostTableContainer tableBody={<TableBody data={postData} deleteFn={deletePost} />}
                          tableHead={<TableHead sortById={changeSortId} sortByTitle={changeSortTitle} />} />
    </div>
  );
};
