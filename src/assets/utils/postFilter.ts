import { Post } from '../../redux/users/posts/reducer';

export const postFilter = (dataArray: Array<Post>, value: number) => {
  return dataArray.filter((element) => {
    return element.id - 1 < value;
  });
};