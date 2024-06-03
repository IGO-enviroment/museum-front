import { PageContainer } from 'shared/ui/page-container';
import BG from '../../../../../public/preparation/IMG_3378.jpg';
import IMAGE1 from '../../../../../public/preparation/IMG_3060.jpg';
import IMAGE2 from '../../../../../public/preparation/IMG_3060.jpg';
import IMAGE3 from '../../../../../public/preparation/IMG_3012.jpg';
import IMAGE4 from '../../../../../public/preparation/IMG_2921.jpg';
import IMAGE5 from '../../../../../public/preparation/IMG_2892.jpg';
import IMAGE6 from '../../../../../public/preparation/IMG_2955.jpg';
import { Layout } from 'shared/ui/layout';
import classNames from 'classnames/bind';
import styles from './preparation-page.module.scss';
import Image from 'next/image';

const cx = classNames.bind(styles);

const data = {
  title: 'Как подготовиться к походу в музей',
  sections: [
    {
      title: 'Заранее выберите день и время',
      description:
        'Если попасть в музейный час пик, можно утомиться еще в очереди на вход, а в музее разглядывать спины других посетителей вместо экспонатов.',
      images: [IMAGE1, IMAGE2],
    },
    {
      title: 'Решить, что хочется посмотреть',
      description:
        'Даже если музей предлагает уже готовые схемы осмотра экспозиции, ориентируйтесь прежде всего на свои интересы, а не на рекомендации. Главное — получить удовольствие, а не посмотреть «обязательную» программу: тогда в музей захочется вернуться.\n' +
        '\n' +
        'По этому же принципу можно заранее подготовиться к походу теоретически: скажем, немного почитать о периодах, художниках или стилях, представленных на выставке.\n' +
        '\n' +
        'Эта информация обычно тоже есть на сайтах музеев и галерей, там же часто есть и дополнительные сведения, которые раскроют экспонаты полнее. Но не стоит превращать посещение музея в экзамен: иногда интереснее сначала посмотреть работы художника вживую, а уже потом изучить его творческий путь.',
      images: [IMAGE3, IMAGE4],
    },
    {
      title: 'Узнать об экскурсиях',
      description:
        'Поход в галерею будет интереснее, если удастся не только осмотреть экспонаты, но и что-то о них узнать. Особенно это полезно на выставках современного искусства, которое часто вызывает много вопросов.\n' +
        '\n' +
        'Если идете с друзьями или семьей, попробуйте заказать экскурсию для компании, если в одиночку — попасть на сборную экскурсию, записавшись заранее или присоединившись спонтанно. Преимущество экскурсии в том, что посетители точно знают, сколько времени проведут в музее, и никто не будет им мешать.',
      images: [IMAGE5, IMAGE6],
    },
  ],
};

export function PreparationPage() {
  return (
    <PageContainer title={data.title} imageSrc={BG}>
      <Layout>
        {data.sections.map(({ title, description, images }) => (
          <section className={cx('section')}>
            <h2 className={cx('section-title')}>{title}</h2>
            <div className={cx('section-description')}>{description}</div>
            <div className={cx('image')}>
              <Image src={images[0]} alt='' />
            </div>
          </section>
        ))}
        <h2></h2>
      </Layout>
    </PageContainer>
  );
}
