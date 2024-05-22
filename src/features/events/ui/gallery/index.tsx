'use client';

import { Carousel } from 'shared/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import classNames from 'classnames/bind';
import styles from './gallery.module.scss';
import TestImg from '../../../../../public/test/test.jpg';
import { useDotButtonNavigation } from 'shared/ui/carousel/utils/use-dot-navigation';
import Image from 'next/image';
import { Button } from 'shared/ui/button-d';
import ChevronRight from '../../../../../public/icons/system/24x24/chevron-right.svg';

const cx = classNames.bind(styles);

const cards = [
  {
    id: 1,
    title: 'Концерт-пробуждение «Мелодии весны» PianoЕкб',
    link: '',
    image: '',
  },
  {
    id: 2,
    title: 'Наука в большом городе. Интеллектуальный ландшафт Свердловска',
    link: '',
    image: '',
  },
  {
    id: 3,
    title: 'Концерт-пробуждение «Мелодии весны» PianoЕкб',
    link: '',
    image: '',
  },
];

export const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex } = useDotButtonNavigation(emblaApi);

  return (
    <Carousel className={cx('root')} gap={8} needDotNavigation carouselData={[emblaRef, emblaApi]}>
      {cards.map(({ title }, index) => (
        <div key={index} className={cx('card', { selected: index === selectedIndex })}>
          <span className={cx('title')}>{title}</span>
          <Image src={TestImg} alt={title} />
          <Button
            className={cx('go-to-event')}
            viewType='primary'
            children='Расписание и билеты'
            icon={ChevronRight}
            iconPosition='end'
          />
        </div>
      ))}
    </Carousel>
  );
};
