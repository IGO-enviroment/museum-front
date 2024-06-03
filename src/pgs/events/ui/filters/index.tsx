'use client';

import classNames from 'classnames/bind';
import classes from './filters.module.scss';
import { ToggleField } from 'shared/ui/toggle-field';
import { useMemo, useState } from 'react';
import { RangeField } from 'shared/ui/range-field';
import { Filters as IFilter } from '../../types';
import { useEventsStore } from '../../model/store/store';
import { FILTER_TYPES } from '../../model/store/filters-slice';
import { DatePickerField } from '../dates-picker-field';

const cx = classNames.bind(classes);

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
  const [filtersShown, setFiltersShown] = useState(true);
  const { filters, changeFilter } = useEventsStore();

  const onFilterChange = (name: string, data?: any) => {
    changeFilter(name, data);
  };

  return (
    <div className={cx('container', className)}>
      <h2 className={cx('title')}>Фильтры</h2>
      {filtersShown && (
        <div className={cx('root')}>
          {filters.map(data => (
            <Filter data={data} onChange={onFilterChange} />
          ))}
        </div>
      )}
    </div>
  );
};

interface FilterProps {
  data: IFilter.Filter.Item;
  onChange: (name: string, data?: any) => void;
}

export const Filter = ({ data, onChange }: FilterProps) => {
  const { type, value, name, title } = data;

  const CurrentFilter = useMemo(() => {
    if (type === FILTER_TYPES.SELECT) {
      const selected = value?.filter((item: any) => item.isSelected);
      const selectedIds = selected?.map((item: any) => item.id);

      const onOptionChange = ({ id: optionId }: any) => {
        const newSelected = selectedIds.includes(optionId)
          ? selectedIds.filter((id: any) => id !== optionId)
          : [...selectedIds, optionId];
        onChange(name, newSelected);
      };

      return (
        <div className={cx('select')}>
          {value?.map((option: any, i: number) => (
            <div
              className={cx('option', { selected: selectedIds.includes(option.id) })}
              onClick={() => onOptionChange(option)}
              key={i}
            >
              {option.name}
            </div>
          ))}
        </div>
      );
    }
    if (type === FILTER_TYPES.CALENDAR) {
      return (
        <DatePickerField
          key={name}
          values={value}
          onChange={values => {
            onChange(name, values);
          }}
        />
      );
    }
    if (type === FILTER_TYPES.TOGGLE) {
      const checked = value[0]?.isSelected;
      return (
        <ToggleField
          key={title}
          title={title}
          name={name}
          value={checked}
          onChange={() => {
            onChange(name);
          }}
        />
      );
    }
    if (type === FILTER_TYPES.RANGE) {
      const filterValue = value[0];
      return (
        <RangeField
          className={cx('range-field')}
          key={name}
          start={filterValue.from}
          finish={filterValue.to}
          max={filterValue.max}
          min={filterValue.min}
          onChange={data => {
            onChange(name, data);
          }}
        />
      );
    }
  }, [data, onChange]);

  return (
    <div className={cx('filter')}>
      <div className={cx('filter-title')}>{title}</div>
      {CurrentFilter}
    </div>
  );
};
