'use client';

import styles from './page.module.scss';
import type { Metadata } from 'next';
import BG from '../../public/afisha/i.webp';
import Image from 'next/image';
import { Layout } from 'shared/ui/layout';
import ArrowDown from '../../public/icons/system/24x24/arrow-down.svg';
import { useRef } from 'react';
import { EventCard } from 'widget/event-card';
import TestPhotoCard from '../../public/test/test.jpg';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { Carousel } from 'shared/ui/carousel';

// export const metadata: Metadata = {
//   title: 'Museum',
// };

const title = 'Афиша событий';
const subtitle = 'в музее истории Екатеринбурга';

export default function Home() {
  const elementToScroll = useRef<HTMLDivElement | null>(null);

  const onScrollerClick = () => {
    if (elementToScroll) {
      elementToScroll.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles['main-banner']}>
        <Layout>
          <h1 className={styles.title}>
            {title}
            <br />
            <span className={styles.subtitle}>{subtitle}</span>
          </h1>
        </Layout>
        <Image alt='' src={BG} className={styles['banner-img']} />
      </div>
      <div ref={elementToScroll} className={styles['main-wrapper']}>
        <div onClick={onScrollerClick} className={styles.scroller}>
          <ArrowDown className={styles['arrow-down']} />
        </div>
        <Layout>
          <div className={styles.popular}>
            <h2 className={styles['cards-title']}>Популярные события</h2>
            <Carousel
              carouselOptions={{
                slidesPerView: 4,
                freeMode: true,
                spaceBetween: 30,
                modules: [FreeMode, Pagination],
                className: styles.cards,
              }}
            >
              {Array.from([1, 2, 3, 4, 5]).map(() => (
                <EventCard image={{ src: TestPhotoCard, alt: 'test' }} />
              ))}
            </Carousel>
          </div>
        </Layout>
      </div>
    </div>
  );
}
