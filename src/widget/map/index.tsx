'use client';

import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './map.module.scss';

interface Props {
  className?: string;
  point: [number, number];
}

const cx = classNames.bind(styles);

export function Map(props: Props) {
  const { point, className } = props;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cx('root', { loading: !loaded }, className)}>
      <YMaps>
        <YMap
          onLoad={() => {
            setLoaded(true);
          }}
          width='100%'
          height='100%'
          defaultState={{ zoom: 14, center: point }}
        >
          <Placemark geometry={point} />
        </YMap>
      </YMaps>
    </div>
  );
}
