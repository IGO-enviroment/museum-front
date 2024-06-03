import classes from './events-page.module.scss';
import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import { Searcher } from '../searcher';
import { Filters } from '../filters';
import { Gallery } from '../gallery';
import { Grid } from 'shared/ui/grid';
import { List } from '../list';

const cx = classNames.bind(classes);

export function EventsPage() {
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
