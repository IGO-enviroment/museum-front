import { Slider, SliderProps } from '@mui/base';
import classes from './range-input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

const slotProps: SliderProps['slotProps'] = {
  root: ownerState => ({
    className: cx('root', {
      disabled: ownerState.disabled,
    }),
  }),
  rail: {
    className: cx('rail'),
  },
  track: {
    className: cx('track'),
  },
  thumb: {
    className: cx('thumb'),
  },
};

export const RangeInput = (props: SliderProps) => {
  return <Slider {...props} slotProps={slotProps} />;
};
