'use client';

import { InputOwnerState, Input as BaseInput } from '@mui/base';
import classNames from 'classnames/bind';
import classes from './input.module.scss';

const cx = classNames.bind(classes);

export const Input = () => {
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

  return <BaseInput slotProps={slotProps} />;
};
