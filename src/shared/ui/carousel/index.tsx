'use client';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { ReactElement } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface Props {
  children: ReactElement[];
  carouselOptions?: SwiperProps;
}

export function Carousel({ children, carouselOptions }: Props) {
  return (
    <Swiper {...carouselOptions}>
      {children.map(item => (
        <SwiperSlide>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
