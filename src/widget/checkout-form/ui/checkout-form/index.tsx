import styles from './checkout-form.module.scss';
import classNames from 'classnames/bind';
import { Card } from 'entities/checkout-card';
import { Grid } from 'shared/ui/grid';
import { DateTabs } from 'shared/ui/date-tabs';
import { Tab } from 'shared/ui/tab';
import { Stepper } from 'shared/ui/stepper';
import { ChangeEvent, useState } from 'react';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import ArrowRight from '../../../../../public/icons/system/24x24/arrow-right.svg';

const cx = classNames.bind(styles);

const cardSlotsProps = {
  title: {
    className: cx('card-title'),
  },
  description: {
    className: cx('card-description'),
  },
};

const form = [
  { key: 'name', label: 'Имя', placeHolder: 'Иван' },
  { key: 'last-name', label: 'Фамилия', placeHolder: 'Пупкин' },
  { key: 'email', label: 'Почта', placeHolder: 'pupkin@gmail.com' },
];

const TEST_LIMIT = 10;

export const CheckoutForm = () => {
  const [stepperValue, setStepperValue] = useState<string>('0');
  const stepperNumber = parseInt(stepperValue) || 0;

  const handleStepper = (action: 'add' | 'remove') => {
    setStepperValue(`${stepperNumber + (action === 'add' ? 1 : -1)}`);
  };

  const onStepperChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value.replace(/\D/g, '');

    if (nextValue === '') {
      setStepperValue('');
    } else {
      setStepperValue(`${Math.min(TEST_LIMIT, Number(nextValue))}`);
    }
  };

  return (
    <Grid className={cx('root')}>
      <Card
        className={cx('days')}
        title='Выберите день'
        description='Октябрь'
        slotsProps={cardSlotsProps}
      >
        <DateTabs
          needShortDaysOfWeek
          className={cx('dates')}
          dates={[
            '2024-05-13T13:12:51.159Z',
            '2024-05-14T13:12:51.159Z',
            '2024-05-15T13:12:51.159Z',
          ]}
          value={['2024-05-15T13:12:51.159Z']}
        />
      </Card>
      <Card
        className={cx('time')}
        title='Доступное время'
        description='Длительность мероприятия: 220 мин.'
        slotsProps={cardSlotsProps}
      >
        <div className={cx('time-tabs')}>
          {['13:30', '11:30', '10:30'].map(children => (
            <Tab className={cx('time-tab')} children={children} selected={children === '10:30'} />
          ))}
        </div>
      </Card>
      <Card
        className={cx('ticket-type')}
        title='Тип билета'
        description='*Пенсионеры и студенты'
        slotsProps={cardSlotsProps}
      >
        <div className={cx('tickets')}>
          <Stepper
            label='Детский'
            className={cx('ticket-stepper')}
            value={stepperValue}
            onChange={onStepperChange}
            isActive={stepperNumber > 0}
            plusDisabled={stepperNumber >= TEST_LIMIT}
            minusDisabled={stepperNumber <= 0}
            onAdd={() => handleStepper('add')}
            onSubtract={() => handleStepper('remove')}
          />
          <Stepper label='Взрослый' className={cx('ticket-stepper')} value={0} />
          <Stepper label='Льготный' className={cx('ticket-stepper')} value={0} />
        </div>
      </Card>
      <Card
        className={cx('personal')}
        title='Личные данные'
        description='Отправим билеты на указанную почту'
        slotsProps={cardSlotsProps}
      >
        <div className={cx('personal-form')}>
          <div className={cx('fields')}>
            {form?.map(item => (
              <div className={cx('field')} key={item.key}>
                <div className={cx('description')}>{item.label}</div>
                <Input placeholder={item.placeHolder} className={cx('input-field')} />
              </div>
            ))}
          </div>
          <Button
            className={cx('pay-button')}
            children='Перейти к оформлению'
            icon={ArrowRight}
            iconPosition='end'
          />
        </div>
      </Card>
    </Grid>
  );
};
