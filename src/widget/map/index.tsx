'use client';

import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';

interface Props {
  point: [number, number];
}

export function Map(props: Props) {
  const { point } = props;

  return (
    <YMaps>
      <YMap width='100%' height='100%' defaultState={{ zoom: 14, center: point }}>
        <Placemark geometry={point} />
      </YMap>
    </YMaps>
  );
}
