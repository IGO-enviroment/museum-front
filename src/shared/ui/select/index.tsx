'use client';

import { OptionOwnerState, OptionProps, SelectProps } from '@mui/base';
import { SelectOwnProps } from '@mui/base/Select/Select.types';
import classNames from 'classnames/bind';
import classes from './select.module.scss';
import { Select as BaseSelect, Option as BaseOption } from '@mui/base';

const cx = classNames.bind(classes);

const slotsProps: SelectOwnProps<any, boolean>['slotProps'] = {
  root: {
    className: cx('root'),
  },
  listbox: {
    className: cx('listbox'),
  },
  popup: {
    className: cx('popup'),
  },
};

export const Select = (props: SelectProps<any, boolean>) => {
  return <BaseSelect {...props} slotProps={slotsProps} />;
};

const optionSlotsProps: OptionProps<any>['slotProps'] = {
  root: (ownerState: OptionOwnerState<any>) => ({
    className: cx('option', { selected: ownerState.selected, highlighted: ownerState.highlighted }),
  }),
};

export const Option = (props: OptionProps<any, any>) => {
  return <BaseOption {...props} slotProps={optionSlotsProps} />;
};
