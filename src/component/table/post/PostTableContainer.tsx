import React, { FC, ReactNode } from 'react';

interface PostTableContainerProps {
  tableHead: ReactNode;
  tableBody: ReactNode;
}

export const PostTableContainer: FC<PostTableContainerProps> = ({ tableHead, tableBody }) => {
  return (
   <>
       <table>
           {tableHead}
           {tableBody}
       </table>
   </>
  );
};