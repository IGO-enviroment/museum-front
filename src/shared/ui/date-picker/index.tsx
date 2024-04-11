import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { Input } from 'shared/ui/input';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './date-picker.module.scss';
import { ru } from 'date-fns/locale';
import { format } from 'date-fns';

const cx = classNames.bind(styles);

// @todo добавить hover (поле будет изменяться только через date picker)

export const DatePicker = () => {
  const anchor = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<Date>();
  const [opened, setOpened] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div ref={anchor}>
        <Input
          className={cx('input')}
          placeholder={format(new Date(), 'dd.MM.yyyy')}
          value={selected ? format(selected, 'dd.MM.yyyy') : ''}
          onClick={() => {
            setOpened(true);
          }}
          onBlur={event => {
            if (!calendarRef.current?.contains(event.relatedTarget)) {
              setOpened(false);
            }
          }}
        />
      </div>
      <Popup anchor={anchor.current} open={opened} placement='bottom'>
        <div ref={calendarRef}>
          <DayPicker
            mode='single'
            className={cx('date-pricker')}
            selected={selected}
            onSelect={setSelected}
            locale={ru}
            onDayClick={() => {
              setOpened(false);
            }}
            modifiersClassNames={{
              today: cx('today'),
              selected: cx('selected'),
            }}
          />
        </div>
      </Popup>
    </>
  );
};