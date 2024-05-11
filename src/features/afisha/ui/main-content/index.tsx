'use client';

import styles from './main-content.module.scss';
import { Layout } from 'shared/ui/layout';
import Image from 'next/image';
import BG from '../../../../../public/afisha/i.webp';
import ArrowDown from '../../../../../public/icons/system/24x24/chevron-down.svg';
import { PopularSection } from 'features/afisha/ui/popular-section';
import { TicketsSection } from 'features/afisha/ui/tickets-section';
import { ClosestEventsSection } from 'features/afisha/ui/closest-events-section';
import { useRef, useState } from 'react';
import { useIntersectionObserver } from 'shared/hooks/use-intersection-observer';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export function MainContent() {
  const elementToScroll = useRef<HTMLDivElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [bannerVisible, setBannerVisible] = useState(true);

  const onScrollerClick = () => {
    if (elementToScroll) {
      elementToScroll.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useIntersectionObserver(
    bannerRef,
    ({ isIntersecting }) => {
      setBannerVisible(isIntersecting);
    },
    { threshold: 0.2 },
  );

  return (
    <div className={styles.root}>
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
      <div ref={elementToScroll} className={cx('main-wrapper', { rounded: bannerVisible })}>
        <div onClick={onScrollerClick} className={styles.scroller}>
          <ArrowDown className={styles['arrow-down']} />
        </div>
        <Layout>
          <PopularSection />
          <TicketsSection />
          <ClosestEventsSection />
        </Layout>
      </div>
    </div>
  );
}
