import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import Logo from '../../../../public/icons/header/logo.svg';
import LogoSmall from '../../../../public/icons/header/logo-0.5.svg';
import Link from 'next/link';

const cx = classNames.bind(styles);

const footerLinks = [
  {
    title: 'Официальная информация',
    links: [
      { children: 'Уставные документы', href: '' },
      { children: 'Независимая оценка качества', href: '' },
      { children: 'Аудитория музей', href: '' },
      { children: 'Сведения об учреждении', href: '' },
      { children: 'Охрана труда', href: '' },
    ],
  },
  {
    title: 'От учредителя',
    links: [
      { children: 'Сайт Управления культуры', href: '' },
      { children: 'Электронный муниципалитет', href: '' },
      {
        children: '«Субъекты РФ — навстречу гражданам России 2024»:федеральный новостной лекторий',
        href: '',
      },
      { children: 'Гражданская оборона', href: '' },
      { children: 'Антикоррупционная политика', href: '' },
      { children: 'Официальные сайты', href: '' },
      { children: 'Новости Екатеринбурга', href: '' },
    ],
  },
  {
    title: 'Партнеры',
    links: [
      { children: 'СМИ', href: '' },
      { children: 'Бизнес', href: '' },
      {
        children: 'Английская версия сайта',
        href: '',
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className={cx('root')}>
      <Layout className={cx('layout')}>
        <div className={cx('container')}>
          <Logo className={cx('logo-svg')} fill='#54585D' />
          <LogoSmall className={cx('logo-svg-small')} fill='#54585D' />
          {footerLinks.map(({ title, links }) => (
            <div className={cx('list')}>
              <div className={cx('list-title')}>{title}</div>
              {links.map(link => (
                <Link className={cx('list-link')} {...link} />
              ))}
            </div>
          ))}
        </div>
      </Layout>
    </footer>
  );
}
