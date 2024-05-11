import { MainContent } from 'features/afisha/ui/main-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Афиша',
};

export default function Home() {
  return <MainContent />;
}
