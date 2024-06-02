export interface Event {
  id: string;
  title: string;
  images: string[];
  imageSrc: string;
  description: string;
  address: {
    title: string;
    coords: [number, number];
  };
  info: Array<{
    type: 'date' | 'time' | 'age' | 'price';
    title: string;
    description: string;
  }>;
}
