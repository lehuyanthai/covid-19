import React from 'react';

import './styles.scss';

export interface IListColor {
  children: React.ReactNode;
}

const ListColor = ({ children }: IListColor) => {
  return <>{children}</>;
};

export default ListColor;
