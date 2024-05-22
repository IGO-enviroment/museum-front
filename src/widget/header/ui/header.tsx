'use client';

import { Layout } from 'shared/ui/layout';
import Menu from '../../../../public/icons/system/24x24/menu.svg';
import Logo from '../../../../public/icons/header/logo.svg';
import classNames from 'classnames/bind';
import classes from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(classes);

const navLinks: { children: string; href: string }[] = [
  { children: 'Афиша', href: '/' },
  { children: 'Мероприятия', href: '/events' },
  { children: 'Личный кабинет', href: '' },
];

const routesForBlackTheme = ['/events', '/event'];

export const Header = () => {
  const pathname = usePathname();

  const isBlackTheme = routesForBlackTheme.some(route => route.indexOf(pathname));

  return (
    <header className={cx('header', { 'black-theme': isBlackTheme })}>
      <Layout className={cx('layout')}>
        <div className={cx('wrapper')}>
          <Logo className={cx('logo')} fill='currentColor' />
          <Menu className={cx('menu')} fill='currentColor' />
          <div className={cx('navigation')}>
            {navLinks.map(data => (
              <Link key={data.children} {...data} />
            ))}
          </div>
        </div>
      </Layout>
    </header>
  );
};
