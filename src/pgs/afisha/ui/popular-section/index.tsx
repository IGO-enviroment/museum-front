import { Carousel } from 'shared/ui/carousel';
import { EventCard } from '../../../../entities/event-card';
import styles from './popular-section.module.scss';
import classNames from 'classnames/bind';
import { useBreakpoint } from 'shared/lib/hooks/use-breakpoint';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from 'shared/ui/button';
import ArrowLeft from '../../../../../public/icons/system/24x24/chevron-left.svg';
import ArrowRight from '../../../../../public/icons/system/24x24/chevron-right.svg';
import { useButtonNavigation } from 'shared/ui/carousel/utils/use-button-navigation';

const cx = classNames.bind(styles);

interface Props {
  events?: Array<PopularEvent>;
}

export function PopularSection({ events }: Props) {
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
        {events?.map(({ imageSrc, badges, id }, index) => (
          <EventCard
            id={id}
            key={id}
            className={cx('event-card')}
            photoClassName={cx('event-card-photo')}
            badgesClassName={cx('event-card-badges')}
            badges={badges}
            image={{ src: imageSrc, alt: 'test' }}
          />
        ))}
      </Carousel>
    </section>
  );
}
