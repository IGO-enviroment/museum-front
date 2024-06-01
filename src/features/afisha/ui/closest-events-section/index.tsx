import styles from './closest-events-section.module.scss';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import { EventCard } from 'widget/event-card';
import TestPhotoCard from '../../../../../public/test/test.jpg';
import { useBreakpoint } from 'shared/hooks/use-breakpoint';
import classNames from 'classnames/bind';
import { Carousel } from 'shared/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useState } from 'react';
import { Button } from 'shared/ui/button-d';
import ArrowRight from '../../../../../public/icons/system/24x24/arrow-right.svg';
import { useRouter } from 'next/navigation';
import { Grid } from 'shared/ui/grid';

const cx = classNames.bind(styles);

const calendarData = {
  month: 'Май',
  dates: [
    '2024-05-09T13:12:51.159Z',
    '2024-05-10T13:12:51.159Z',
    '2024-05-11T13:12:51.159Z',
    '2024-05-12T13:12:51.159Z',
    '2024-05-13T13:12:51.159Z',
    '2024-05-14T13:12:51.159Z',
    '2024-05-15T13:12:51.159Z',
  ],
};

const cardsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const badges = [
  { type: 'date', text: '28, 30 марта' },
  { type: 'time', text: '14:00' },
  { type: 'age', text: '12+' },
  { type: 'info', text: 'Экскурсия по выставке' },
];

export function ClosestEventsSection() {
  const router = useRouter();
  const [activeData, setActiveData] = useState(() => calendarData.dates[0]);

  const isLessThanS = useBreakpoint('s-');
  const isGreaterThanL = useBreakpoint('l+');
  const carouselData = useEmblaCarousel({ dragFree: true });

  return (
    <section className={styles['closest-events']}>
      <h2 className={styles['section-title']}>Ближайшие события</h2>
      <div className={styles.top}>
        <div className={styles.calendar}>
          <span className={styles.month}>{calendarData.month}</span>

          <div className={styles.dates}>
            {calendarData.dates.map((dateISO, index) => {
              const date = new Date(dateISO);
              const needShortDaysOfWeek = isLessThanS;
              const weekDay = format(date, !needShortDaysOfWeek ? 'EEEE' : 'EEEEEE', {
                locale: ru,
              });
              const day = date.getDate();
              return (
                <button
                  onClick={() => {
                    setActiveData(dateISO);
                  }}
                  key={index}
                  className={cx('date', { selected: activeData === dateISO })}
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
            {cardsList.map((_, index) => (
              <EventCard
                className={cx('closest-item')}
                photoClassName={cx('closest-item-photo')}
                key={index}
                badges={badges}
                image={{ src: TestPhotoCard, alt: 'test' }}
              />
            ))}
          </Grid>
        ) : (
          <Carousel carouselData={carouselData}>
            {cardsList.map((_, index) => (
              <EventCard
                className={cx('closest-item')}
                photoClassName={cx('closest-item-photo')}
                titleClassName={cx('closest-item-title')}
                badgesClassName={cx('closest-item-badges')}
                key={index}
                badges={badges}
                image={{ src: TestPhotoCard, alt: 'test' }}
              />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
}
