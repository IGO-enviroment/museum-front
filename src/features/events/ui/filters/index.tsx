'use client';

import classNames from 'classnames/bind';
import classes from './filters.module.scss';
import { Option, Select } from 'shared/ui/select';
import { useFiltersStore } from 'features/events/store/store';
import { DatePickerField } from 'features/events/ui/dates-picker-field';

const cx = classNames.bind(classes);

export const Filters = () => {
  const { filters, changeFilter } = useFiltersStore();

  return (
    <div className={cx('root')}>
      {filters.map(({ name, value: items, type }) => {
        if (type === 'select') {
          const selected = items?.filter(item => item.isSelected);
          const selectedIds = selected?.map(item => item.id);
          return (
            <Select
              value={selectedIds}
              multiple
              key={name}
              onChange={(_, idS) => {
                changeFilter(name, idS);
              }}
            >
              {items?.map((option, i) => (
                <Option value={option.id} key={i}>
                  {option.name}
                </Option>
              ))}
            </Select>
          );
        }
        if (type === 'calendar') {
          return (
            <DatePickerField
              values={items}
              onChange={values => {
                changeFilter(name, values);
              }}
            />
          );
        }
      })}
    </div>
  );
};
