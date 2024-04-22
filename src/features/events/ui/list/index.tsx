'use client';

import classNames from 'classnames/bind';
import classes from './list.module.scss';
import { Events } from 'features/events/types';
import { ListItem } from 'features/events/ui/list-item';
import { Pagination } from 'shared/ui/pagination';
import { useEventsStore } from 'features/events/store/store';

const cx = classNames.bind(classes);

const tempItems: Partial<Events.Item>[] = [
  {
    name: 'Название мероприятия #1',
  },
  {
    name: 'Название мероприятия #2',
  },
  {
    name: 'Название мероприятия #3',
  },
  {
    name: 'Название мероприятия #4',
  },
];

export const List = () => {
  const { page, changePage } = useEventsStore();
  const { events } = useEventsStore();

  return (
    <div className={cx('root')}>
      <div className={cx('events')}>
        {events.map((data, i) => (
          <ListItem key={i} {...data} />
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
