import { Layout } from 'shared/ui/layout';
import Menu from '../../../../public/icons/system/24x24/menu.svg';
import Logo from '../../../../public/icons/header/logo.svg';
import classNames from 'classnames/bind';
import classes from './header.module.scss';
import Link from 'next/link';

const cx = classNames.bind(classes);

const navLinks: { children: string; href: string }[] = [
  { children: 'Афиша', href: '/' },
  { children: 'Мероприятия', href: '/events' },
  { children: 'Личный кабинет', href: '' },
];

export const Header = () => {
  return (
    <header className={cx('header')}>
      <Layout className={cx('layout')}>
        <div className={cx('wrapper')}>
          <Logo className={cx('logo')} />
          <Menu className={cx('menu')} />
          <div className={cx('navigation')}>
            {navLinks.map(data => (
              <Link {...data} />
            ))}
          </div>
        </div>
      </Layout>
    </header>
  );
};
