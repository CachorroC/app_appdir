import Image from 'next/image';
import { Poiret_One } from 'next/font/google';
import styles from '#@/styles/css/page.module.css';
import Link from 'next/link';
import { demos } from '#@/lib/links';
import clientPromise from '#@/lib/mongodb';
import { InferGetServerSidePropsType } from 'next';
const poiret = Poiret_One({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export async function getMongoData() {
  try {
    await clientPromise;

    return {
      props: {
        isConnected: true,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        isConnected: false,
      },
    };
  }
}
export default async function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getMongoData>) {
  return (
    <div className={styles.grid}>
      {demos.map((section) => {
        return (
          <div
            key={section.name}
            className={styles.module}
          >
            {isConnected ? (
              <h2 className="subtitle">
                You are connected to MongoDB
              </h2>
            ) : (
              <h2 className="subtitle">
                You are NOT connected to MongoDB. Check the{' '}
                <code>README.md</code> for instructions.
              </h2>
            )}
            <h2>{section.name}</h2>
            {section.items.map((item) => {
              return (
                <Link
                  href={item.slug}
                  key={item.name}
                  className={styles.button}
                >
                  {
                    //^ href={`/${item.slug}`}
                  }
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
