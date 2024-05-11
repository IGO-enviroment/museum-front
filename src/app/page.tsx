import { MainContent } from 'features/afisha';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Афиша',
};

export default function Home() {
  return <MainContent />;
}
