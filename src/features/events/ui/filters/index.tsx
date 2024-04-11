'use client';

import classNames from 'classnames/bind';
import classes from './filters.module.scss';
import { Option, Select } from 'shared/ui/select';
import { useFiltersStore } from 'features/events/store/store';
import { DatePicker } from 'shared/ui/date-picker';

const cx = classNames.bind(classes);

export const Filters = () => {
  const { filters, changeFilter } = useFiltersStore();

  return (
    <div className={cx('root')}>
      {filters.map(({ name, values: items }) => {
        const selected = items.filter(item => item.isSelected);
        const selectedIds = selected.map(item => item.id);
        return (
          <Select
            value={selectedIds}
            multiple
            key={name}
            onChange={(_, idS) => {
              changeFilter(name, idS);
            }}
          >
            {items.map((option, i) => (
              <Option value={option.id} key={i}>
                {option.name}
              </Option>
            ))}
          </Select>
        );
      })}
      <DatePicker />
      <DatePicker />
    </div>
  );
};
