import styles from './stepper.module.scss';
import { InputHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames/bind';
import PlusSVG from '../../../../public/icons/system/24x24/plus.svg';
import MinusSVG from '../../../../public/icons/system/24x24/minus.svg';

export interface StepperProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'> {
  canAdd?: boolean;
  canSubtract?: boolean;
  plusDisabled?: boolean;
  minusDisabled?: boolean;
  buttonClickBehavior?: 'prevent-input-blur';
  onAdd?: MouseEventHandler;
  onSubtract?: MouseEventHandler;
  failed?: boolean;
  isActive?: boolean;
  label?: ReactNode;
}

const cx = classNames.bind(styles);

export const Stepper = ({
  className,
  isActive,
  minusDisabled,
  plusDisabled,
  value,
  onChange,
  onAdd,
  onSubtract,
  label,
}: StepperProps) => {
  return (
    <div className={cx('wrapper', className)}>
      {Boolean(label) && <div className={cx('label')}>{label}</div>}
      <div className={cx('root', { active: isActive })}>
        <button
          onClick={onSubtract}
          className={cx('button')}
          disabled={minusDisabled}
          children={<MinusSVG />}
        />
        <input value={value} onChange={onChange} size={1} className={cx('input')} />
        <button
          onClick={onAdd}
          className={cx('button')}
          disabled={plusDisabled}
          children={<PlusSVG />}
        />
      </div>
    </div>
  );
};
