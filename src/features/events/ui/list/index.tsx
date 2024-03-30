import classNames from 'classnames/bind';
import classes from './list.module.scss';
import { Events } from 'features/events/types';
import { ListItem } from 'features/events/ui/list-item';

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
  return (
    <div className={cx('root')}>
      <div className={cx('events')}>
        {tempItems.map((data, i) => (
          <ListItem {...data} />
        ))}
      </div>
      <div className={cx('pagination')} />
    </div>
  );
};
