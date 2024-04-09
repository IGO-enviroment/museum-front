'use client';

import { Input } from 'shared/ui/input';
import classNames from 'classnames/bind';
import classes from './searcher.module.scss';
import { Select, Option } from 'shared/ui/select';

const cx = classNames.bind(classes);

const options = [{ title: 'Поиск по заголовку' }, { title: 'Поиск по содержимому' }];

export const Searcher = () => {
  return (
    <div className={cx('root')}>
      <Select defaultValue={options[0].title} multiple={false} className={cx('select')}>
        {options.map((option, i) => (
          <Option key={i} value={option.title}>
            {option.title}
          </Option>
        ))}
      </Select>
      <Input />
    </div>
  );
};
