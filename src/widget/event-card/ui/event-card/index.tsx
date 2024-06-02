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
  id: string;
  className?: string;
  image: ImageProps;
  title?: string;
  badges?: Array<{ type: string; text: string }>;
  photoClassName?: string;
  badgesClassName?: string;
  titleClassName?: string;
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

// @todo в entity
export const EventCard = ({
  id,
  className,
  image,
  badges,
  photoClassName,
  badgesClassName,
  titleClassName,
  title = 'Наука в большом городе. Интеллектуальный ландшафт Свердловской области области',
}: Props) => {
  return (
    <Link href={`event/${id}`} className={cx('root', className)}>
      <div className={cx('photo', photoClassName)}>
        <Image {...image} fill />
      </div>
      <div className={cx('title', titleClassName)}>{title}</div>
      <div className={cx('badges', badgesClassName)}>
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
