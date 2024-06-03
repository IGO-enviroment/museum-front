import Clock from '../../../../public/icons/system/24x24/clock.svg';
import Calendar from '../../../../public/icons/system/24x24/calendar.svg';
import Info from '../../../../public/icons/system/24x24/info.svg';
import User from '../../../../public/icons/system/24x24/user.svg';

export const getIconByBadgeType = (type: string) => {
  switch (type) {
    case 'time':
      return <Clock />;
    case 'date':
      return <Calendar />;
    case 'info':
      return <Info />;
    case 'age':
      return <User />;
    default:
      return null;
  }
};
