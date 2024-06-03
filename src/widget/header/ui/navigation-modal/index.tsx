import styles from './modal.module.scss';
import classNames from 'classnames/bind';
import LogoSmall from '../../../../../public/icons/header/logo-0.5.svg';
import Cross from '../../../../../public/icons/system/24x24/cross.svg';
import { Button } from 'shared/ui/button';
import Link from 'next/link';

const cx = classNames.bind(styles);

const navLinks: { children: string; href: string }[] = [
  { children: 'Афиша', href: '/' },
  { children: 'Все мероприятия', href: '/events' },
  { children: 'О музее', href: '/about' },
];

export const NavigationModal = ({ onClose }: { onClose: VoidFunction }) => {
  return (
    <div className={cx('root')}>
      <div className={cx('container')}>
        <div className={cx('top')}>
          <LogoSmall fill='#1A2026' />
          <Button onClick={onClose} className={cx('close')} viewType='secondary' icon={Cross} />
        </div>
        <ul className={cx('nav-list')}>
          {navLinks.map(({ children, href }) => (
            <Link onClick={onClose} className={cx('nav-link')} children={children} href={href} />
          ))}
        </ul>
      </div>
    </div>
  );
};
