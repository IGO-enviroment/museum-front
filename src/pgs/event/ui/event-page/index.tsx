'use client';

import { Layout } from 'shared/ui/layout';
import classNames from 'classnames/bind';
import styles from './event-page.module.scss';
import { Button } from 'shared/ui/button-d';
import ChevronRight from '../../../../../public/icons/system/24x24/chevron-right.svg';
import { Grid } from 'shared/ui/grid';
import Calendar from '../../../../../public/icons/system/24x24/calendar.svg';
import Clock from '../../../../../public/icons/system/24x24/clock.svg';
import Person from '../../../../../public/icons/system/24x24/user.svg';
import Ticket from '../../../../../public/icons/system/24x24/ticket.svg';
import Info from '../../../../../public/icons/system/24x24/info.svg';
import { Map } from 'widget/map';
import { useRouter } from 'next/navigation';
import type { Event } from 'entities/event';
import { ImageGallery } from '../image-gallery';

const cx = classNames.bind(styles);

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

export function EventPage(props: Event) {
  const { title, description, address, info, id, imageSrc, images } = props;
  const { push } = useRouter();

  return (
    <Layout className={cx('layout')}>
      <section className={cx('title')}>
        <h1>{title}</h1>
        <Button
          size='small'
          children='Расписание и билеты'
          className={cx('more')}
          icon={ChevronRight}
          iconPosition='end'
          onClick={() => push('/checkout/121212')}
        />
      </section>
      <section className={cx('images')}>
        <ImageGallery className={cx('image-gallery')} images={images} />
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
          <div className={cx('about-description')}>{description}</div>
        </section>
      </Grid>
      <Grid>
        <section className={cx('address', 'body-section')}>
          <h2 className={cx('section-title')}>Адрес</h2>
          <div className={cx('address-name')}>{address.title}</div>
          <div className={cx('map-container')}>
            <Map point={address.coords} />
          </div>
        </section>
      </Grid>
    </Layout>
  );
}
