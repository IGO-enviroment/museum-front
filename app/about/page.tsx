import { AboutPage } from 'pgs/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О музее',
};

export default function About() {
  return <AboutPage />;
}
