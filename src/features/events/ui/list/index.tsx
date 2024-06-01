'use client';

import classNames from 'classnames/bind';
import classes from './list.module.scss';
import { Pagination } from 'shared/ui/pagination';
import { useEventsStore } from 'features/events/store/store';
import { EventCard } from 'widget/event-card';
import TestImg from '../../../../../public/test/test.jpg';
import Link from 'next/link';

const cx = classNames.bind(classes);

const badges = [
  { type: 'date', text: '28, 30 марта' },
  { type: 'time', text: '14:00' },
  { type: 'age', text: '12+' },
  { type: 'info', text: 'Экскурсия по выставке' },
];

export const List = () => {
  const { page, changePage } = useEventsStore();
  const { events } = useEventsStore();

  return (
    <div className={cx('root')}>
      <div className={cx('events')}>
        {events
          .flatMap(item => [item, item, item])
          .map((data, i) => (
            <EventCard
              className={cx('event')}
              href='/event/12345'
              image={TestImg}
              key={i}
              badges={badges}
            />
          ))}
      </div>
      <Pagination
        className={cx('pagination')}
        current={page.current}
        total={page.total}
        onChange={changePage}
      />
    </div>
  );
};
