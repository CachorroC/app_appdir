import '#@/styles/css/globals.css';
import Navbar from '#@/components/navbar';
import styles from '#@/styles/css/layout.module.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="[color-scheme: light dark]"
    >
      <body>
        <Navbar />

        <section className={styles.main}>
          {children}
        </section>
      </body>
    </html>
  );
}
