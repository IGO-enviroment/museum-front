import classNames from 'classnames/bind';
import classes from './list-item.module.scss';
import { Events } from 'features/events/types';

const cx = classNames.bind(classes);

//@todo убрать partial после
export const ListItem = ({ name, previewUrl }: Partial<Events.Item>) => {
  return (
    <div className={cx('root')}>
      <div className={cx('image-container')}>
        <img src={previewUrl} className={cx('item-image')} />
      </div>
      <div className={cx('title')}>{name}</div>
      <div className={cx('tags')}>
        <div className={cx('tag')} />
      </div>
    </div>
  );
};
