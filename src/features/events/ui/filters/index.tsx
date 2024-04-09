'use client';

import classNames from 'classnames/bind';
import classes from './filters.module.scss';
import { FilterItem } from 'features/events/ui/filter-item';

const cx = classNames.bind(classes);

export const Filters = () => {
  return (
    <div className={cx('root')}>
      {Array.from({ length: 10 }).map((_, i) => (
        <FilterItem key={i} />
      ))}
    </div>
  );
};
