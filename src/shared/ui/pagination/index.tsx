'use client';

import BasePagination from 'rc-pagination';
import type { PaginationProps } from 'rc-pagination/es/interface';
import './pagination.scss';
import type React from 'react';

const itemRender = (
  page: number,
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
  element: React.ReactNode,
) => {
  switch (type) {
    case 'jump-prev':
    case 'jump-next':
      return <div className={`rc-pagination-custom-${type}`} children={'...'} />;
    default:
      return element;
  }
};

export const Pagination = (props: PaginationProps) => {
  return <BasePagination {...props} itemRender={itemRender} />;
};
