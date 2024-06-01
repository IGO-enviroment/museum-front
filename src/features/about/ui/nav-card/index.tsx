import styles from './nav-card.module.scss';
import classNames from 'classnames/bind';
import { Button } from 'shared/ui/button-d';
import ArrowRight from '../../../../../public/icons/system/24x24/arrow-right.svg';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  className?: string;
  onClick?: () => void;
}

export const NavCard = ({ title, className, onClick }: Props) => {
  return (
    <div className={cx('root', className)}>
      <div className={cx('title')}>{title}</div>
      <Button
        className={cx('more')}
        onClick={onClick}
        children='Подробнее'
        iconPosition='end'
        icon={ArrowRight}
      />
    </div>
  );
};
