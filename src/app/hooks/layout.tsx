import { fetchCategories } from '#@/lib/get-categories';
import { Boundary } from '#@/components/boundary';
import { ClickCounter } from '#@/components/click-counter';
import HooksClient from '#@/components/hooks-client';
import HooksServer from '#@/components/hooks-server';
import { TabGroup } from '#@/components/tab-group';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata = {
  title: 'Hooks',
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = await fetchCategories();
  if (!categories) notFound();

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/hooks"
          items={[
            {
              text: 'Home',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <Boundary labels={['Client Component Hooks']}>
        <HooksClient />
      </Boundary>
      <Boundary labels={['Server Component Hooks']}>
        <HooksServer />
      </Boundary>

      <div>{children}</div>
    </div>
  );
}
