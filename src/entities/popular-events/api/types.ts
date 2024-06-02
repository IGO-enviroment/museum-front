interface Badge {
  type: string;
  text: string;
  price: string;
}

interface PopularEvent {
  id: string;
  title: string;
  imageSrc: string;
  url: string;
  badges: Array<Badge>;
}
