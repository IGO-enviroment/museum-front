'use client';

import { Layout } from 'shared/ui/layout';
import Menu from '../../../../public/icons/system/24x24/menu.svg';
import Logo from '../../../../public/icons/header/logo.svg';
import LogoSmall from '../../../../public/icons/header/logo-0.5.svg';
import classNames from 'classnames/bind';
import classes from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationModal } from 'widget/header/ui/navigation-modal';
import { useState } from 'react';

const cx = classNames.bind(classes);

const navLinks: { children: string; href: string }[] = [
  { children: 'Афиша', href: '/' },
  { children: 'Все мероприятия', href: '/events' },
  { children: 'О музее', href: '/about' },
  // { children: 'Личный кабинет', href: '' }, временно пока нет лк
];

const routesForBlackTheme = ['/events', '/event'];

export const Header = () => {
  const pathname = usePathname();

  const [navigationOpened, setNavigationOpened] = useState(false);

  const isBlackTheme =
    routesForBlackTheme.some(path => pathname.includes(path)) && pathname !== '/';

  return (
    <header className={cx('header', { 'black-theme': isBlackTheme })}>
      {navigationOpened && <NavigationModal onClose={() => setNavigationOpened(false)} />}
      <Layout className={cx('layout')}>
        <div className={cx('wrapper')}>
          <Link href='/' className={cx('logo', { disabled: pathname === '/' })}>
            <Logo className={cx('logo-svg')} fill='currentColor' />
            <LogoSmall className={cx('logo-svg-small')} fill='currentColor' />
          </Link>
          <Menu
            onClick={() => setNavigationOpened(true)}
            className={cx('menu')}
            fill='currentColor'
          />
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
