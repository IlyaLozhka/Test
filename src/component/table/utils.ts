export const tableSortFn = (dataArray: any, fieldName: string, orderDirection: string) => {

  return dataArray.sort((a: any, b: any) => {
      switch (fieldName) {
        case 'id' : {
          if (orderDirection === 'desc') {
            return b[fieldName] - a[fieldName];
          }
          return a[fieldName] - b[fieldName];
        }

        case 'title' : {
          let x = a[fieldName];
          let y = b[fieldName];

          if (orderDirection === 'desc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          }
          return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
      }
    }
  );
};