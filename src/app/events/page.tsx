import classes from './page.module.scss';
import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import type { Metadata } from 'next';
import { List } from 'features/events/ui/list';
import { Searcher } from 'features/events/ui/searcher';
import { Filters } from 'features/events/ui/filters';
import { Gallery } from 'features/events/ui/gallery';
import { Grid } from 'shared/ui/grid';

const cx = classNames.bind(classes);

export const metadata: Metadata = {
  title: 'Поиск по событиям музея',
};

export default function Events() {
  /** Добавить склетную загрузку для страницы */
  return (
    <div className={cx('wrapper')}>
      <div className={cx('gallery')}>
        <Gallery />
      </div>
      <Layout className={cx('root')}>
        <Grid className={cx('main-container')}>
          <Filters className={cx('filters')} />
          <div className={cx('main-column')}>
            <h2 className={cx('title')}>Поиск по мероприятиям</h2>
            <Searcher />
            <List />
          </div>
        </Grid>
      </Layout>
    </div>
  );
}
