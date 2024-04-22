import classes from './page.module.scss';
import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import type { Metadata } from 'next';
import { List } from 'features/events/ui/list';
import { Searcher } from 'features/events/ui/searcher';
import { Filters } from 'features/events/ui/filters';

const cx = classNames.bind(classes);

export const metadata: Metadata = {
  title: 'Поиск по событиям музея',
};

export default function Events() {
  return (
    <Layout className={cx('root')}>
      <Filters />
      <Searcher />
      <List />
    </Layout>
  );
}
