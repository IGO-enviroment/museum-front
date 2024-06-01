'use client';

import { Input } from 'shared/ui/input';
import classNames from 'classnames/bind';
import classes from './searcher.module.scss';
import { Select, Option } from 'shared/ui/select';
import { useEventsStore } from 'features/events/store/store';

const cx = classNames.bind(classes);

const options: Array<{ title: string; by: 'title' | 'description' }> = [
  { title: 'Поиск по заголовку', by: 'title' },
  { title: 'Поиск по содержимому', by: 'description' },
];

// @todo добавить debounce
export const Searcher = () => {
  const { searchValue, onSearchChange } = useEventsStore();
  const { searchBy, onSearchByChange } = useEventsStore();

  return (
    <div className={cx('root')}>
      <Select
        value={searchBy}
        className={cx('select')}
        onChange={(_, data) => {
          onSearchByChange(data);
        }}
      >
        {options.map((option, i) => (
          <Option key={i} value={option.by}>
            {option.title}
          </Option>
        ))}
      </Select>
      <Input
        value={searchValue}
        onChange={event => {
          onSearchChange(event.target.value);
        }}
      />
    </div>
  );
};
