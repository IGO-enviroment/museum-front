import styles from './card.module.scss';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  slotsProps?: {
    title?: {
      className?: string;
    };
    description?: {
      className?: string;
    };
  };
}

export const Card = ({ title, description, children, className, slotsProps }: Props) => {
  return (
    <div className={cx('root', className)}>
      <div className={cx('title', slotsProps?.title?.className)}>{title}</div>
      <div className={cx('description', slotsProps?.description?.className)}>{description}</div>
      {children}
    </div>
  );
};
