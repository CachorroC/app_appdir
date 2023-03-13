import Image from 'next/image';
import { Poiret_One } from 'next/font/google';
import styles from '#@/styles/css/page.module.css';
import Link from 'next/link';
import { demos } from '#@/lib/links';

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
            <h2>{section.name}</h2>
            {section.items.map((item) => {
              return (
                <Link
                  href={`/${item.slug}`}
                  key={item.name}
                  className={styles.button}
                >
                  <h3>{item.name}</h3>
                  {item.description ? (
                    <p>{item.description}</p>
                  ) : null}
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
