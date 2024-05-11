import type { ReactNode } from 'react';
import classNames from 'classnames/bind';
import classes from './layout.module.scss';
import 'styles/global.scss';
import { Header } from 'widget/header';
import { Footer } from 'widget/footer';

const cx = classNames.bind(classes);

interface Props {
  /** Встраиваемый контент. */
  children: ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <html lang='ru'>
      <body className={cx('body')}>
        <Header />
        <main className={cx('main')}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
