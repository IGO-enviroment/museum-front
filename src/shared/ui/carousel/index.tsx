'use client';

import { CSSProperties, ReactElement } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotNavigation } from 'shared/ui/carousel/ui/dot-navigation';
import './carousel.scss';

interface Props {
  gap?: number;
  children: ReactElement[];
  needDotNavigation?: boolean;
  carouselData: ReturnType<typeof useEmblaCarousel>;
  className?: string;
}

export function Carousel({ children, needDotNavigation, gap, carouselData, className }: Props) {
  const [emblaRef, emblaApi] = carouselData;

  return (
    <section className={`embla ${className ? className : ''}`}>
      <div className='embla__viewport' ref={emblaRef}>
        <div
          className='embla__container'
          style={
            {
              '--slide-spacing': `${gap}px`,
            } as CSSProperties
          }
        >
          {children.map(item => (
            <div className='embla__slide'>{item}</div>
          ))}
        </div>
      </div>
      <div className='embla__controls'>
        {needDotNavigation && <DotNavigation emblaApi={emblaApi} />}
      </div>
    </section>
  );
}
