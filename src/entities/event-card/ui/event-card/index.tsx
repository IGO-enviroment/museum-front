import classNames from 'classnames/bind';
import classes from './event-card.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { getIconByBadgeType } from '../../lib/get-icon-by-bage-type';

type Props = {
  id: string;
  className?: string;
  image: { src: string | StaticImageData; alt: string };
  title?: string;
  badges?: Array<{ type: string; text: string }>;
  photoClassName?: string;
  badgesClassName?: string;
  titleClassName?: string;
};

const cx = classNames.bind(classes);

export const EventCard = ({
  id,
  className,
  image,
  badges,
  photoClassName,
  badgesClassName,
  titleClassName,
  title,
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
