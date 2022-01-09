import React, { useContext, createContext, useState, ReactNode } from 'react';
import { Post } from '../../../redux/users/posts/reducer';
import { useDispatch } from 'react-redux';
import { tableSortFn } from '../utils';

interface TableContextValues {
  orderBy: string;
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  order: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  handleSort: (fieldName: string) => void;
  handleDelete: (id: number) => void;
  handleSelect: (value: number) => void;
}

interface TableProviderProps<T> {
  children: ReactNode;
  data: Array<T>;
  dispatchType: string;
}


const TableContext = createContext<TableContextValues | undefined>(undefined);

export const useTableContext = (): TableContextValues => {
  const c = useContext(TableContext);
  if (!c) throw new Error('useTableContext should be inced TableProvider');
  return c;
};


export const TableProvider = ({ children, data, dispatchType }: TableProviderProps<Post>) => {

  const [orderBy, setOrderBy] = useState<string>('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const dispatch = useDispatch();

  const handleSort = (fieldName: string) => {
    const orderDirection = order === 'asc' ? 'desc' : 'asc';
    setOrder(orderDirection);
    const result = tableSortFn(data, fieldName, orderDirection);
    dispatch({
      type: dispatchType,
      payload: result
    });
  };

  const handleDelete = (id: number) => {
    const result = data.filter((element) => {
      return element.id !== id;
    });
    dispatch({
      type: dispatchType,
      payload: result
    });
  };

  const handleSelect = (value: number) => {
    const result = data.filter((element) => {
      return element.id - 1 < value;
    });
    dispatch({
      type: dispatchType,
      payload: result
    });
  };

  const value = {
    orderBy,
    setOrder,
    order,
    setOrderBy,
    handleSort,
    handleDelete,
    handleSelect
  };

  return (
    <TableContext.Provider value={value}>
      {children}
    </TableContext.Provider>
  );
};