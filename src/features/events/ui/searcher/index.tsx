'use client';

import { Input } from 'shared/ui/input';
import classNames from 'classnames/bind';
import classes from './searcher.module.scss';
import { useEventsStore } from 'features/events/store/store';

const cx = classNames.bind(classes);

const options: Array<{ title: string; by: 'title' | 'description' }> = [
  { title: 'Поиск по заголовку', by: 'title' },
  { title: 'Поиск по содержимому', by: 'description' },
];

// @todo добавить debounce
export const Searcher = () => {
  const { searchValue, onSearchChange } = useEventsStore();

  return (
    <div className={cx('root')}>
      <Input
        value={searchValue}
        placeholder='Введите название мероприятия'
        onChange={event => {
          onSearchChange(event.target.value);
        }}
      />
    </div>
  );
};
