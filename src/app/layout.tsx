import '../styles/css/globals.css';
import Navbar from '../components/navbar';
import styles from '../styles/css/layout.module.css';
import { AddressBar } from '#/components/address-bar';

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
      className="[color-scheme:dark]"
    >
      <body>
        <Navbar />
        <div>
          {' '}
          <AddressBar />
        </div>
        <section>
          <main className={styles.main}> {children}</main>
        </section>
      </body>
    </html>
  );
}
