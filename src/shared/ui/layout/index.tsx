import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import classes from './layout.module.scss';

const cx = classNames.bind(classes);

interface Props {
  /** Контент. */
  children: ReactNode;
  /** Html tag.*/
  as?: keyof JSX.IntrinsicElements;
  /** Доп. классы */
  className?: string;
}

/**
 * Лэйаут
 * @param props Свойства.
 * @return Элемент.
 */
export const Layout = ({ children, as: Tag = 'div', className }: Props) => {
  return <Tag className={cx(className, 'root')}>{children}</Tag>;
};
