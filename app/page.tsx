import type { Metadata } from 'next';
import { HomePage } from '@/components/Home/HomePage';
import { getHomeStats } from '@/components/Home/stats';
import config from '@/config';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { ...config.metadata.openGraph, url: '/' },
};
export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <main>
      <HomePage badge={null} stats={await getHomeStats()} />
    </main>
  );
}
