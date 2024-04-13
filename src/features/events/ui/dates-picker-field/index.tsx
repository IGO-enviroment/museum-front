import { DatePicker } from 'shared/ui/date-picker';
import classNames from 'classnames/bind';
import classes from './date-picker-field.module.scss';

const cx = classNames.bind(classes);

type Props = {
  values: [string, string];
  onChange: (values?: [string, string]) => void;
};

// @todo ограничить значения полей даты:
// если введно минимальное значение ограничивать даты в максимльном
// и наоборот
export const DatePickerField = ({ onChange, values }: Props) => {
  const onSelect = (dateName?: string, value?: string) => {
    if (dateName === 'to') {
      onChange([value || '', values[1]]);
    } else {
      onChange([values[0], value || '']);
    }
  };

  return (
    <div className={cx('root')}>
      c
      <DatePicker name='to' value={values[0]} onSelect={onSelect} />
      по
      <DatePicker name='from' value={values[1]} onSelect={onSelect} />
    </div>
  );
};
