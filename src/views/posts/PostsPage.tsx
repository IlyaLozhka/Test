import React, { FC, useEffect } from 'react';
import { TableContainer } from '../../component/table/TableContainer';
import { usePosts } from '../../redux/users/posts/selector';
import { useGetPosts } from '../../component/shared/hooks/useGetPosts';
import style from './PostsPage.module.css';
import { PostTableBody } from './tableContent/PostTableBody';
import { PostTableHead } from './tableContent/PostTableHead';
import { POSTS_TYPE } from '../../redux/users/posts/actions';

export const PostsPage: FC = () => {

  const { posts } = usePosts();
  const getPosts = useGetPosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={style.postPageWrapper}>
      <TableContainer
        dispatchType={POSTS_TYPE.SET_POSTS}
        data={posts}
        tableBody={<PostTableBody data={posts} />}
        tableHead={<PostTableHead />} />
    </div>
  );
};
