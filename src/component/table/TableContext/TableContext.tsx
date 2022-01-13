import React, { useContext, createContext, useState, ReactNode, FC } from 'react';
import { useDispatch } from 'react-redux';
import { tableSortFn } from '../utils';

interface TableContextValues {
  orderBy: string;
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  order: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  handleSort: (fieldName: string) => void;
  handleDelete: (id: number) => void;
}

interface TableProviderProps<T> {
  children: ReactNode;
  data: T[];
  dispatchType: string;
  recordCount:number;
}


const TableContext = createContext<TableContextValues | undefined>(undefined);

export const useTableContext = (): TableContextValues => {
  const c = useContext(TableContext);
  if (!c) throw new Error('useTableContext should be inced TableProvider');
  return c;
};

export const TableProvider:FC<TableProviderProps<{}>> = <T extends unknown>({ children, data, dispatchType, recordCount }: TableProviderProps<T>) => {

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
    const result = data.filter((element:T) => {
      // return element.id !== id;
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
  };

  return (
    <TableContext.Provider value={value}>
      {children}
    </TableContext.Provider>
  );
};