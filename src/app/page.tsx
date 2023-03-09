import Image from 'next/image';
import { Poiret_One } from 'next/font/google';
import styles from '#/styles/css/page.module.css';
import Link from 'next/link';
import { demos } from '#/lib/demos';

const poiret = Poiret_One({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={styles.grid}>
      {demos.map((section) => {
        return (
          <div
            key={section.name}
            className={styles.module}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {section.name}
            </div>

            <div className={styles.grid}>
              {section.items.map((item) => {
                return (
                  <Link
                    href={`/${item.slug}`}
                    key={item.name}
                    className={styles.module}
                  >
                    <div className="font-medium text-gray-200 group-hover:text-gray-50">
                      {item.name}
                    </div>

                    {item.description ? (
                      <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                        {item.description}
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
