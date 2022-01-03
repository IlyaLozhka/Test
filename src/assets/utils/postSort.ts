import { Post } from '../../redux/users/posts/reducer';

export enum SORT_TYPE {
  BY_LOWEST_ID = 'BY_LOWEST_ID',
  BY_LARGEST_ID = 'BY_LARGEST_ID',
}


export const postSort = (dataArray: Array<Post>, type:SORT_TYPE) => {
  return [...dataArray.sort((a, b) => {
    switch (type) {
      case SORT_TYPE.BY_LOWEST_ID:
        return a.id - b.id;
      case SORT_TYPE.BY_LARGEST_ID:
        return b.id - a.id;
    }
  })];
};