import { fetchCategoryBySlug } from '#/lib/get-categories';
import { ClickCounter } from '#/components/click-counter';
import { TabGroup } from '#/components/tab-group';
import { notFound } from 'next/navigation';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = await fetchCategoryBySlug(
    params.categorySlug,
  );
  if (!category) notFound();
  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between">
          <TabGroup
            path={`/error-handling/${category.slug}`}
            items={[
              {
                text: 'All',
              },
              ...category.items.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}