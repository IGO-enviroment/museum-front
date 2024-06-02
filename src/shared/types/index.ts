export interface Badge {
  type: string;
  text: string;
  price: string;
}

export interface Event {
  id: string;
  title: string;
  imageSrc: string;
  url: string;
  badges: Array<Badge>;
}
