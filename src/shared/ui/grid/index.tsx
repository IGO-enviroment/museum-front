import { ReactNode } from 'react';
import classes from './grid.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

export const Grid = ({ children }: { children: ReactNode }) => {
  return <div className={cx('root')}>{children}</div>;
};
