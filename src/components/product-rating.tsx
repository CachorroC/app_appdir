import clsx from 'clsx';

export const ProductRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-x-1">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <span
            className="material-symbols-outlined"
            key={i}
          >
            star
          </span>
        );
      })}
    </div>
  );
};
