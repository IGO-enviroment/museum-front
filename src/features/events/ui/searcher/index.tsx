import { Input } from 'shared/ui/input';
import classNames from 'classnames/bind';
import classes from './searcher.module.scss';

const cx = classNames.bind(classes);

export const Searcher = () => {
  return (
    <div className={cx('root')}>
      <div className={cx('select')} />
      <Input />
    </div>
  );
};
