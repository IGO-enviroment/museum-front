import styles from './closest-events-section.module.scss';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import { EventCard } from '../../../../entities/event-card';
import { useBreakpoint } from 'shared/lib/hooks/use-breakpoint';
import classNames from 'classnames/bind';
import { Carousel } from 'shared/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from 'shared/ui/button';
import ArrowRight from '../../../../../public/icons/system/24x24/arrow-right.svg';
import { useRouter } from 'next/navigation';
import { Grid } from 'shared/ui/grid';
import { useClosestEvents } from 'entities/closest-events';

const cx = classNames.bind(styles);

export function ClosestEventsSection() {
  const router = useRouter();

  const {
    setDate,
    query: { isLoading, data },
  } = useClosestEvents();

  const isLessThanS = useBreakpoint('s-');
  const isGreaterThanL = useBreakpoint('l+');
  const carouselData = useEmblaCarousel({ dragFree: true });

  if (isLoading) {
    return null;
  }

  return (
    <section className={styles['closest-events']}>
      <h2 className={styles['section-title']}>Ближайшие события</h2>
      <div className={styles.top}>
        <div className={styles.calendar}>
          <span className={styles.month}>{data?.month}</span>

          <div className={styles.dates}>
            {data?.dates.map(({ value, isActive }, index) => {
              const date = new Date(value);
              const needShortDaysOfWeek = isLessThanS;
              const weekDay = format(date, !needShortDaysOfWeek ? 'EEEE' : 'EEEEEE', {
                locale: ru,
              });
              const day = date.getDate();
              return (
                <button
                  onClick={() => {
                    setDate(value);
                  }}
                  key={index}
                  className={cx('date', { selected: isActive })}
                >
                  <span className={styles.day}>{day}</span>
                  <span className={styles['week-day']}>{weekDay}</span>
                </button>
              );
            })}
          </div>
        </div>
        {isGreaterThanL && (
          <Button
            className={cx('all-events')}
            viewType='secondary'
            children='Все события'
            size='small'
            icon={ArrowRight}
            iconPosition='end'
            onClick={() => {
              router.push('/events');
            }}
          />
        )}
      </div>

      <div className={styles.events}>
        {isGreaterThanL ? (
          <Grid className={cx('events-grid')}>
            {data?.events.map(({ title, badges, imageSrc, id }) => (
              <EventCard
                id={id}
                key={id}
                title={title}
                className={cx('closest-item')}
                photoClassName={cx('closest-item-photo')}
                badges={badges}
                image={{ src: imageSrc, alt: 'test' }}
              />
            ))}
          </Grid>
        ) : (
          <Carousel carouselData={carouselData}>
            {data?.events.map(({ title, imageSrc, badges, id }) => (
              <EventCard
                id={id}
                key={id}
                title={title}
                className={cx('closest-item')}
                photoClassName={cx('closest-item-photo')}
                titleClassName={cx('closest-item-title')}
                badgesClassName={cx('closest-item-badges')}
                badges={badges}
                image={{ src: imageSrc, alt: 'test' }}
              />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
}
