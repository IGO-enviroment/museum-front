'use client';

import BasePagination from 'rc-pagination';
import type { PaginationProps } from 'rc-pagination/es/interface';
import './pagination.scss';
import ArrowLeft from '../../../../public/icons/system/24x24/chevron-left.svg';
import type React from 'react';

const itemRender = (
  page: number,
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
  element: React.ReactNode,
) => {
  switch (type) {
    // case 'jump-prev':
    // case 'jump-next':
    //   return <div className={`rc-pagination-custom-${type}`} children={'...'} />;
    case 'prev':
    case 'next':
      return (
        <button className={`pagination-${type}`}>
          <ArrowLeft />
        </button>
      );
    default:
      return element;
  }
};

export const Pagination = (props: PaginationProps) => {
  return <BasePagination {...props} itemRender={itemRender} />;
};
