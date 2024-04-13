import { Input } from 'shared/ui/input';
import classNames from 'classnames/bind';
import classes from './range-field.module.scss';
import React, { useCallback, useEffect, useState } from 'react';
import { RangeInput } from 'shared/ui/range-input';

const cx = classNames.bind(classes);

type Props = {
  /** Максимальное значение диапазона. */
  max: number;
  /** Минимальное значение диапазона. */
  min: number;
  /** Начало диапазона.*/
  start?: number;
  /** Конец выбранного диапазона. */
  finish?: number;
  /** Отключен ли компонент. */
  disabled?: boolean;
  /** Сработает при изменении значений после отпускания ползунка. */
  onChange: (data: [from: number, to: number]) => void;
};

/**
 * Форматирует значение, приводит к строке.
 * @param value Значение поля.
 * @param isFloat Признак использования нецелочисленных значений.
 * @return Отформатированное значение.
 */
export const format = (value: number | string, isFloat = false) => {
  let result = String(value);
  result = result.replace(isFloat ? /[^0-9.,]/g : /\D+/g, '');
  if (isFloat) {
    result = result.replace(',', '.').replace(/(^\d+\.?\d+$)/g, '$1');
  }
  return result;
};

export const RangeField = ({ max, min, start = min, finish = max, onChange, disabled }: Props) => {
  const [textStart, setTextStart] = useState(format(start));
  const [textFinish, setTextFinish] = useState(format(finish));

  const [currentStart, setCurrentStart] = useState<number>(start);
  const [currentFinish, setCurrentFinish] = useState<number>(finish);

  useEffect(() => {
    setTextStart(format(start));
    setTextFinish(format(finish));
    setCurrentStart(start);
    setCurrentFinish(finish);
  }, [start, finish]);

  const dispatchChange = useCallback(
    (newStart: number, newFinish: number) => {
      if (
        String(newStart) !== String(currentStart) ||
        String(newFinish) !== String(currentFinish)
      ) {
        onChange([newStart, newFinish]);
      } else {
        setTextStart(format(newStart));
        setTextFinish(format(newFinish));
      }
    },
    [onChange, currentStart, currentFinish],
  );

  const handleStartFilterChange: React.FocusEventHandler<HTMLInputElement> = ({
    target: { value: inputValue },
  }) => {
    const cleanInputValue = format(inputValue);
    const value = cleanInputValue === '' ? null : cleanInputValue;
    const newValue = Number(value === null || Number(value) < min ? min : value);
    const newStart = newValue > max ? max : newValue;
    setCurrentStart(Math.min(newStart, currentFinish));
    setCurrentFinish(Math.max(newStart, currentFinish));

    dispatchChange(newStart, currentFinish);
  };

  const handleEndFilterChange: React.FocusEventHandler<HTMLInputElement> = ({
    target: { value: inputValue },
  }) => {
    const cleanInputValue = format(inputValue);
    const value = cleanInputValue === '' ? null : cleanInputValue;
    const newValue = Number(value === null || Number(value) > max ? max : value);
    const newFinish = newValue < min ? min : newValue;

    setCurrentStart(Math.min(newFinish, currentStart));
    setCurrentFinish(Math.max(newFinish, currentStart));

    dispatchChange(currentStart, newFinish);
  };

  return (
    <div className={cx('root')}>
      <div className={cx('fields')}>
        от
        <Input
          className={cx('input')}
          value={textStart}
          onBlur={handleStartFilterChange}
          onChange={({ target }: { target: { value: string } }) => {
            setTextStart(format(target.value));
          }}
          onKeyDown={(event: React.KeyboardEvent) => {
            event.code === 'Enter' && (event.target as HTMLElement).blur();
          }}
        />
        до
        <Input
          className={cx('input')}
          value={textFinish}
          onBlur={handleEndFilterChange}
          onChange={({ target }: { target: { value: string } }) => {
            setTextFinish(format(target.value));
          }}
          onKeyDown={(event: React.KeyboardEvent) => {
            event.code === 'Enter' && (event.target as HTMLElement).blur();
          }}
        />
      </div>
      <RangeInput
        max={max}
        min={min}
        step={1}
        value={[currentStart, currentFinish]}
        // onChange={(event, data, activeThumb) => {
        //   if (Array.isArray(data)) {
        //     setTextStart(format(data[0]));
        //     setTextFinish(format(data[1]));
        // onChangeCommitted={(_, data) => {
        //   if (Array.isArray(data)) {
        //     setCurrentStart(data[0]);
        //     setCurrentFinish(data[1]);
        //     dispatchChange(data[0], data[1]);
      />
    </div>
  );
};
