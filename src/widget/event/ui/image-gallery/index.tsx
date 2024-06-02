import { useState } from 'react';
import { Grid } from 'shared/ui/grid';
import classNames from 'classnames/bind';
import styles from './image-gallery.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

interface Props {
  className?: string;
  images: string[];
}

export function ImageGallery({ className, images }: Props) {
  const [current, setCurrent] = useState(() => images?.[0]);

  return (
    <Grid className={cx('root', className)}>
      <div className={cx('image-current')}>
        <Image src={current} alt='' fill />
      </div>
      <div className={cx('image-list')}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrent(image)}
            className={cx('image', { active: current === image })}
          >
            <Image src={image} alt='' fill />
          </div>
        ))}
      </div>
    </Grid>
  );
}
