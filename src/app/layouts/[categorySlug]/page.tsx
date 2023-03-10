import { fetchCategoryBySlug } from '#@/lib/get-categories';
import { SkeletonCard } from '#@/components/skeleton-card';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await fetchCategoryBySlug(
    params.categorySlug,
  );
  if (!category) notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        All {category.name}
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
