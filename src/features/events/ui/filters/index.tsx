import classNames from 'classnames/bind';
import classes from './filters.module.scss';

const cx = classNames.bind(classes);

export const Filters = () => {
  return <div className={cx('root')} />;
};
