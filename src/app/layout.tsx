import type { ReactNode } from 'react';
import classNames from 'classnames/bind';
import classes from './layout.module.scss';
import 'styles/global.scss';

const cx = classNames.bind(classes);

interface Props {
  /** Встраиваемый контент. */
  children: ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <html lang='ru'>
      <body className={cx('body')}>
        <header />
        <main className={cx('main')}>{children}</main>
        <footer />
      </body>
    </html>
  );
}
