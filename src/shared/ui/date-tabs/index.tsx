import styles from './date-tabs.module.scss';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  dates?: string[];
  value?: string[];
  onSelectDate?: (date: string) => void;
  needShortDaysOfWeek?: boolean;
  className?: string;
}

export const DateTabs = ({ className, dates, needShortDaysOfWeek, onSelectDate, value }: Props) => {
  return (
    <div className={cx('dates', className)}>
      {dates?.map((dateISO, index) => {
        const date = new Date(dateISO);
        const weekDay = format(date, !needShortDaysOfWeek ? 'EEEE' : 'EEEEEE', {
          locale: ru,
        });
        const day = date.getDate();
        return (
          <button
            onClick={() => {
              onSelectDate?.(dateISO);
            }}
            key={index}
            className={cx('date', { selected: value?.includes(dateISO) })}
          >
            <span className={styles.day}>{day}</span>
            <span className={styles['week-day']}>{weekDay}</span>
          </button>
        );
      })}
    </div>
  );
};
