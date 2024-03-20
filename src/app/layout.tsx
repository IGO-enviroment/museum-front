import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Layout as Container } from 'shared/ui/layout';
import classNames from 'classnames/bind';
import classes from './layout.module.scss';
import 'styles/global.scss';

const cx = classNames.bind(classes);

interface Props {
  /** Встраиваемый контент. */
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Museum',
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <html lang='ru'>
      <body className={cx('body')}>
        <Container className={cx('main')} as='main' children={children} />
      </body>
    </html>
  );
}
