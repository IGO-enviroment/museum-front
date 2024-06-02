import styles from './page.module.scss';
import classNames from 'classnames/bind';
import { AboutContent } from 'features/about';

const cx = classNames.bind(styles);

export default function About() {
  return <AboutContent />;
}
