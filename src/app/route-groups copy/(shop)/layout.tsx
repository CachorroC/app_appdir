import { fetchCategories } from '#/lib/get-categories';
import { Boundary } from '#/components/boundary';
import { ClickCounter } from '#/components/click-counter';
import { TabGroup } from '#/components/tab-group';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();
  return (
    <Boundary
      labels={['shop layout']}
      color="cyan"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/route-groups"
            items={[
              {
                text: 'Home',
              },
              ...categories.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
              { text: 'Checkout', slug: 'checkout' },
              { text: 'Blog', slug: 'blog' },
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
