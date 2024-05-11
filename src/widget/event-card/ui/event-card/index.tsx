import classNames from 'classnames/bind';
import classes from './event-card.module.scss';
import Image from 'next/image';
import type { ImageProps } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';
import Calendar from '../../../../../public/icons/system/24x24/calendar.svg';
import Clock from '../../../../../public/icons/system/24x24/clock.svg';
import Info from '../../../../../public/icons/system/24x24/info.svg';
import User from '../../../../../public/icons/system/24x24/user.svg';

type Props = {
  href?: string;
  className?: string;
  image: ImageProps;
  badges?: Array<{ type: string; text: string }>;
};

const getIconByBadgeType = (type: string) => {
  switch (type) {
    case 'time':
      return <Clock />;
    case 'date':
      return <Calendar />;
    case 'info':
      return <Info />;
    case 'age':
      return <User />;
    default:
      return null;
  }
};

const cx = classNames.bind(classes);

export const EventCard = ({ className, image, href = '', badges }: Props) => {
  return (
    <Link href={href} className={cx('root', className)}>
      <div className={cx('photo')}>
        <Image {...image} />
      </div>
      <div className={cx('title')}>
        Наука в большом городе. Интеллектуальный ландшафт Свердловской области области
      </div>
      <div className={cx('badges')}>
        {badges?.map(({ type, text }) => (
          <div className={cx('badge')}>
            {getIconByBadgeType(type)}
            <span>{text}</span>
          </div>
        ))}
      </div>
    </Link>
  );
};
