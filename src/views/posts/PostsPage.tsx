import React, { FC, useEffect, useState } from 'react';
import { TableContainer } from '../../component/table/TableContainer';
import { usePosts } from '../../redux/users/posts/selector';
import { useGetPosts } from '../../component/shared/hooks/useGetPosts';
import style from './PostsPage.module.css';
import { PostTableBody } from './tableContent/PostTableBody';
import { PostTableHead } from './tableContent/PostTableHead';
import { POSTS_TYPE } from '../../redux/users/posts/actions';
import { Select } from '../../component/shared/select/Select';

const value = [5, 10, 15];

export const PostsPage: FC = () => {

  const { posts } = usePosts();
  const getPosts = useGetPosts();
  const [recordCount, setRecord] = useState<number>(value[0]);

  useEffect(() => {

    getPosts();
  }, []);

  return (
    <div className={style.postPageWrapper}>
      <Select onChange={setRecord} value={value} label={'Number of posts'} />
      <TableContainer
        recordCount={recordCount}
        dispatchType={POSTS_TYPE.SET_POSTS}
        data={posts}
        tableBody={<PostTableBody data={posts} />}
        tableHead={<PostTableHead />} />
    </div>
  );
};
