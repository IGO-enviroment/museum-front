import { Toggle } from 'shared/ui/toggle';
import classes from './toggle-field.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

type Props = {
  title?: string;
  name?: string;
  titlePosition?: 'left' | 'right';
  onChange?: (data: boolean, name?: string) => void;
  value?: boolean;
};

export const ToggleField = ({ title, titlePosition = 'right', onChange, name, value }: Props) => {
  return (
    <div className={cx('root')}>
      {title && titlePosition === 'left' && title}
      <Toggle
        checked={value}
        onChange={event => {
          onChange && onChange(event.target.checked, name);
        }}
      />
      {title && titlePosition === 'right' && title}
    </div>
  );
};
