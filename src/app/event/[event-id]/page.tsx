import { Metadata } from 'next';
import { Layout } from 'shared/ui/layout';
import classNames from 'classnames/bind';
import styles from './page.module.scss';
import { Button } from 'shared/ui/button-d';
import ChevronRight from '../../../../public/icons/system/24x24/chevron-right.svg';
import TestImage from '../../../../public/test/test.jpg';
import Image from 'next/image';
import { Grid } from 'shared/ui/grid';
import Calendar from '../../../../public/icons/system/24x24/calendar.svg';
import Clock from '../../../../public/icons/system/24x24/clock.svg';
import Person from '../../../../public/icons/system/24x24/user.svg';
import Ticket from '../../../../public/icons/system/24x24/ticket.svg';
import Info from '../../../../public/icons/system/24x24/info.svg';
import { Map } from 'widget/map';

const cx = classNames.bind(styles);

export const metadata: Metadata = {
  title: 'Динамические изменяемое название события',
};

const testData = {
  info: [
    {
      type: 'date',
      title: '13 апреля',
      description: 'Ближайшая дата проведения',
    },
    {
      type: 'time',
      title: '16:00',
      description: '16:00, GMT +05:00',
    },
    {
      type: 'age',
      title: '12+',
      description: 'Возрастное ограничение',
    },
    {
      type: 'price',
      title: 'От 300 ₽',
      description: 'Стоимость билета',
    },
  ],
  address: {
    name: 'Екатеринбург, Дом Качки Карла Либкнехта, 26',
  },
  about:
    'В год 65-летия туристической аварии на перевале Дятлова Музей истории Екатеринбурга и\n' +
    '«Фонд памяти группы Дятлова» представят выставку «Как живые. Группа Дятлова».\n' +
    'Рассказывая о событиях 1959 года и знакомя с редчайшими артефактами, организаторы и\n' +
    'кураторы выставки сконцентрируются на биографиях участников похода, их личностях, а\n' +
    'также историческом, культурном и мифологическом следе, который остался после них.',
};

const getIconByType = (type: string) => {
  switch (type) {
    case 'date':
      return Calendar;
    case 'time':
      return Clock;
    case 'age':
      return Person;
    case 'price':
      return Ticket;
    default:
      return Info;
  }
};

export default function Event({ params }: { params: { 'event-id': string } }) {
  const { info, address, about } = testData;
  return (
    <Layout className={cx('layout')}>
      <section className={cx('title')}>
        <h1>«Этажи времени», экскурсия-променад по выставке «Ешь, лечись, живи» </h1>
        <Button
          size='small'
          children='Расписание и билеты'
          className={cx('more')}
          icon={ChevronRight}
          iconPosition='end'
        />
      </section>
      <section className={cx('images')}>
        <Image src={TestImage} alt='' />
      </section>
      <Grid className={cx('info')}>
        {info.map(({ title, description, type }) => {
          const Icon = getIconByType(type);

          return (
            <div className={cx('info-card')}>
              <div className={cx('info-title')}>
                <Icon />
                <span>{title}</span>
              </div>
              <div className={cx('info-description')}>{description}</div>
            </div>
          );
        })}
      </Grid>
      <Grid>
        <section className={cx('about', 'body-section')}>
          <h2 className={cx('section-title')}>О событиии</h2>
          <div className={cx('about-description')}>{about}</div>
        </section>
      </Grid>
      <Grid>
        <section className={cx('address', 'body-section')}>
          <h2 className={cx('section-title')}>Адрес</h2>
          <div className={cx('address-name')}>{address.name}</div>
          <div className={cx('map-container')}>
            <Map point={[55.684758, 37.738521]} />
          </div>
        </section>
      </Grid>
    </Layout>
  );
}
