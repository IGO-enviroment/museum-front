import { Button as BaseButton, ButtonProps } from '@mui/base';
import classes from './button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

const slotsProps: ButtonProps['slotProps'] = {
  root: ownerState => ({
    className: cx('root', {
      active: ownerState.active,
      disabled: ownerState.disabled,
      ['focus-visible']: ownerState.focusVisible,
    }),
  }),
};
// @todo избавиться
export const Button = (props: ButtonProps) => <BaseButton {...props} slotProps={slotsProps} />;
