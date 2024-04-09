'use client';

import { InputOwnerState, Input as BaseInput, InputProps } from '@mui/base';
import classNames from 'classnames/bind';
import classes from './input.module.scss';

const cx = classNames.bind(classes);

const slotProps = {
  root: (ownerState: InputOwnerState) => ({
    className: cx('root-search', {
      'search-error': ownerState.error,
    }),
  }),
  input: {
    className: cx('search-input'),
  },
};

export const Input = (props: InputProps) => <BaseInput {...props} slotProps={slotProps} />;
