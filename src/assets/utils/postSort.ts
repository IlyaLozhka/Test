import { Post } from '../../redux/users/posts/reducer';

export const sortById = (dataArray: Array<Post>, type: boolean) => {
  return [...dataArray.sort((a, b) => {
    switch (type) {
      case false:
        return a.id - b.id;
      case true:
        return b.id - a.id;
    }
  })];
};

export const sortByTitle = (dataArray: Array<Post>, type: boolean) => {
  console.log('HERE')
  return [...dataArray.sort((a, b) => {
      switch (type) {
        case false:
          if ( a.title < b.title ){
          return -1;
        }
          if ( a.title > b.title ){
            return 1;
          }
          return 0;
        case true:
          if ( b.title < a.title ){
            return -1;
          }
          if ( b.title > a.title ){
            return 1;
          }
          return 0;
      }
    }
  )];
};

