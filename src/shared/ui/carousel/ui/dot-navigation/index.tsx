import classNames from 'classnames/bind';
import styles from './dot-navigation.module.scss';
import { EmblaCarouselType } from 'embla-carousel';
import { useDotButtonNavigation } from 'shared/ui/carousel/utils/use-dot-navigation';

const cx = classNames.bind(styles);

interface Props {
  emblaApi?: EmblaCarouselType;
}

export function DotNavigation({ emblaApi }: Props) {
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButtonNavigation(emblaApi);

  return (
    <div className={cx('root')}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={cx('dot', { 'dot-selected': index === selectedIndex })}
        />
      ))}
    </div>
  );
}
