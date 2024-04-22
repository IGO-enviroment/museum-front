import { Switch, SwitchOwnProps } from '@mui/base/Switch';
import classes from './toggle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

const slotProps: SwitchOwnProps['slotProps'] = {
  root: ownerState => ({
    className: cx('root', {
      checked: ownerState.checked,
      disabled: ownerState.disabled,
      ['focus-visible']: ownerState.focusVisible,
    }),
  }),
  thumb: { className: cx('thumb') },
  track: { className: cx('track') },
  input: { className: cx('input') },
};

export const Toggle = (props: SwitchOwnProps) => {
  return <Switch {...props} slotProps={slotProps} />;
};
