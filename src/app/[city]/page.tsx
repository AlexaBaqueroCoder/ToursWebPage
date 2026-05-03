import type { Metadata } from 'next';
import { Suspense } from 'react';
import CityPageContent from '@/components/pages/CityPageContent';
import { getCityConfig } from '@/data/cities';

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cfg = getCityConfig(city);
  if (!cfg) {
    return {
      title: 'Ciudad | Cartagena Luxury Tours',
      description: 'Experiencias premium en Colombia',
    };
  }

  return {
    title: `${cfg.name} | Cartagena Luxury Tours`,
    description: cfg.heroTitle,
  };
}

export default function CityPage() {
  return (
    <Suspense fallback={null}>
      <CityPageContent />
    </Suspense>
  );
}
