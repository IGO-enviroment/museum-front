'use client';

import classNames from 'classnames/bind';
import classes from './filters.module.scss';
import { Option, Select } from 'shared/ui/select';
import { useEventsStore } from 'features/events/store/store';
import { DatePickerField } from 'features/events/ui/dates-picker-field';
import { ToggleField } from 'shared/ui/toggle-field';
import { useState } from 'react';
import { Button } from 'shared/ui/button';
import { selectors } from 'features/events/store/selectors';
import { RangeField } from 'shared/ui/range-field';
import { FILTER_TYPES } from 'features/events/store/filters-slice';

const cx = classNames.bind(classes);

export const Filters = () => {
  const [filtersShown, setFiltersShown] = useState(true);
  const { filters, changeFilter, resetAll } = useEventsStore();
  const hasSelectedFilters = useEventsStore(selectors.hasSelectedFilters);

  const onFilterChange = (name: string, data: any) => {
    changeFilter(name, data);
  };

  return (
    <>
      <div className={cx('filters-controller')}>
        <ToggleField title='Показывать фильтры' value={filtersShown} onChange={setFiltersShown} />
        {hasSelectedFilters && <Button children='Сбросить фильтры' onClick={resetAll} />}
      </div>
      {filtersShown && (
        <div className={cx('root')}>
          {filters.map(({ name, value, type, title }) => {
            if (type === FILTER_TYPES.SELECT) {
              const selected = value?.filter(item => item.isSelected);
              const selectedIds = selected?.map(item => item.id);
              return (
                <Select
                  value={selectedIds}
                  multiple
                  key={name}
                  onChange={(_, idS) => {
                    onFilterChange(name, idS);
                  }}
                >
                  {value?.map((option, i) => (
                    <Option value={option.id} key={i}>
                      {option.name}
                    </Option>
                  ))}
                </Select>
              );
            }
            if (type === FILTER_TYPES.CALENDAR) {
              return (
                <DatePickerField
                  key={name}
                  values={value}
                  onChange={values => {
                    onFilterChange(name, values);
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
                    changeFilter(name);
                  }}
                />
              );
            }
            if (type === FILTER_TYPES.RANGE) {
              const filterValue = value[0];
              return (
                <RangeField
                  key={name}
                  start={filterValue.from}
                  finish={filterValue.to}
                  max={filterValue.max}
                  min={filterValue.min}
                  onChange={data => {
                    changeFilter(name, data);
                  }}
                />
              );
            }
          })}
        </div>
      )}
    </>
  );
};
