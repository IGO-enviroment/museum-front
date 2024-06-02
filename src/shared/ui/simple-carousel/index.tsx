'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { Carousel } from 'shared/ui/carousel';
import { ReactElement } from 'react';

export const SimpleCarousel = ({
  children,
  className,
}: {
  children: ReactElement[];
  className?: string;
}) => {
  const carouselData = useEmblaCarousel();

  return <Carousel className={className} carouselData={carouselData} children={children} />;
};
