import styles from './tickets-section.module.scss';
import { Carousel } from 'shared/ui/carousel';
import Link from 'next/link';
import Image from 'next/image';
import TestPhotoTicket from '../../../../../public/test/ticket-test.png';
import useEmblaCarousel from 'embla-carousel-react';

const testTickets = [
  { title: 'Роспись сумки-шоппера в технике уральской народной росписи', image: TestPhotoTicket },
  { title: 'Роспись пасхального сувенира', image: TestPhotoTicket },
  { title: '«Короче, есть тема»', image: TestPhotoTicket },
  {
    title: 'Перформанс «Фарфоровый сад» и презентация проекта «Антихрупкость»',
    image: TestPhotoTicket,
  },
  { title: '«Короче, есть тема»', image: TestPhotoTicket },
];

export function TicketsSection() {
  const carouselData = useEmblaCarousel({ dragFree: true });
  return (
    <section className={styles.tickets}>
      <Carousel carouselData={carouselData} gap={8}>
        {testTickets.map(({ title, image }, index) => (
          <Link key={index} href={''} className={styles.ticket}>
            <span className={styles['ticket-title']}>{title}</span>
            <div className={styles['ticket-image']}>
              <Image src={image} alt={''} />
            </div>
          </Link>
        ))}
      </Carousel>
    </section>
  );
}
