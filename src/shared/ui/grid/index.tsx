import { ReactNode } from 'react';
import classes from './grid.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

interface Props {
  className?: string;
  children?: ReactNode;
}

export const Grid = ({ children, className }: Props) => {
  return <div className={cx('root', className)}>{children}</div>;
};
