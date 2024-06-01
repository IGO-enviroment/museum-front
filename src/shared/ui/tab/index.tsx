import { ReactNode } from 'react';
import styles from './tab.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  selected?: boolean;
  className?: string;
}

export const Tab = ({ children, selected, className }: Props) => (
  <button children={children} className={cx('root', className, { selected })} />
);
