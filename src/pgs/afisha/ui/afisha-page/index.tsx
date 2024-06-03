'use client';

import styles from './afisha-page.module.scss';
import { Layout } from 'shared/ui/layout';
import Image from 'next/image';
import BG from '../../../../../public/afisha/i.webp';
import ArrowDown from '../../../../../public/icons/system/24x24/chevron-down.svg';
import { PopularSection } from '../popular-section';
import { TicketsSection } from '../tickets-section';
import { ClosestEventsSection } from '../closest-events-section';
import { useRef } from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  initialPopularEvents?: Array<PopularEvent>;
}

export function AfishaPage({ initialPopularEvents }: Props) {
  const elementToScroll = useRef<HTMLDivElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  const onScrollerClick = () => {
    if (elementToScroll) {
      window.scrollTo({
        behavior: 'smooth',
        top: bannerRef.current?.clientHeight,
      });
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles['main-banner-wrapper']}>
        <div ref={bannerRef} className={styles['main-banner']}>
          <Layout>
            <h1 className={styles.title}>
              Афиша событий
              <br />
              <span className={styles.subtitle}>в музее истории Екатеринбурга</span>
            </h1>
          </Layout>
          <Image alt='' src={BG} className={styles['banner-img']} />
        </div>
      </div>
      <div ref={elementToScroll} className={cx('main-wrapper', 'rounded')}>
        <div onClick={onScrollerClick} className={styles.scroller}>
          <ArrowDown className={styles['arrow-down']} />
        </div>
        <Layout>
          <PopularSection events={initialPopularEvents} />
          <TicketsSection />
          <ClosestEventsSection />
        </Layout>
      </div>
    </div>
  );
}
