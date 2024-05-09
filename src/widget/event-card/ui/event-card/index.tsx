import classNames from 'classnames/bind';
import classes from './event-card.module.scss';
import Image from 'next/image';
import type { ImageProps } from 'next/dist/shared/lib/get-img-props';

type Props = {
  className?: string;
  image: ImageProps;
};

const cx = classNames.bind(classes);

export const EventCard = ({ className, image }: Props) => {
  return (
    <div className={cx('root', className)}>
      <div className={cx('photo')}>
        <Image {...image} />
      </div>
      <div className={cx('title')}>
        Наука в большом городе. Интеллектуальный ландшафт Свердловской области области
      </div>
      <div className={cx('badges')}></div>
    </div>
  );
};
