import { Carousel } from 'shared/ui/carousel';
import { EventCard } from 'widget/event-card';
import styles from './popular-section.module.scss';
import TestPhotoCard from '../../../../../public/test/test.jpg';
import classNames from 'classnames/bind';
import { useBreakpoint } from 'shared/hooks/use-breakpoint';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from 'shared/ui/button-d';
import ArrowLeft from '../../../../../public/icons/system/24x24/chevron-left.svg';
import ArrowRight from '../../../../../public/icons/system/24x24/chevron-right.svg';
import { useButtonNavigation } from 'shared/ui/carousel/utils/use-button-navigation';

const cardsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const badges = [
  { type: 'date', text: '28, 30 марта' },
  { type: 'time', text: '14:00' },
  { type: 'age', text: '12+' },
  { type: 'info', text: 'Экскурсия по выставке' },
];

const cx = classNames.bind(styles);

export function PopularSection() {
  const isBreakpointLargeThanL = useBreakpoint('l+');
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    useButtonNavigation(emblaApi);

  return (
    <section className={styles.popular}>
      <div className={cx('top')}>
        <h2 className={cx('section-title')}>Популярные события</h2>
        {isBreakpointLargeThanL && (
          <div className={cx('buttons')}>
            <Button
              viewType='secondary'
              className={cx('button', 'button--prev')}
              icon={ArrowLeft}
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
            />
            <Button
              viewType='secondary'
              className={cx('button', 'button--next')}
              icon={ArrowRight}
              disabled={nextBtnDisabled}
              onClick={onNextButtonClick}
            />
          </div>
        )}
      </div>
      <Carousel
        gap={8}
        needDotNavigation={isBreakpointLargeThanL}
        carouselData={[emblaRef, emblaApi]}
      >
        {cardsList.map((_, index) => (
          <EventCard
            className={cx('event-card')}
            key={index}
            badges={badges}
            image={{ src: TestPhotoCard, alt: 'test' }}
          />
        ))}
      </Carousel>
    </section>
  );
}
