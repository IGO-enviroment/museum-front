import { ButtonHTMLAttributes, ElementType, SVGAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  size?: 'large' | 'small';
  loading?: boolean;
  icon?: ElementType<SVGAttributes<SVGSVGElement>>;
  iconPosition?: 'start' | 'end';
  viewType?: 'primary' | 'secondary' | 'clear';
}

export const Button = (props: Props) => {
  const {
    className,
    disabled,
    loading,
    children,
    iconPosition = 'start',
    icon: Icon,
    viewType = 'primary',
    size = 'large',
    ...rest
  } = props;
  return (
    <button {...rest} disabled={disabled} className={cx('root', viewType, size, className)}>
      {Icon && iconPosition === 'start' && <Icon className={cx('icon')} />}
      {children}
      {Icon && iconPosition === 'end' && <Icon className={cx('icon')} />}
    </button>
  );
};
