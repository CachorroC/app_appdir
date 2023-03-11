'use client';
import styles from '#@/styles/css/navbar.module.css';
import { demos, type Item } from '#@/lib/demos';
import { useState } from 'react';
import Link from 'next/link';
import { Box, Drawer, Toolbar } from '@mui/material';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import { Poiret_One } from 'next/font/google';
import 'material-symbols';

const poiret = Poiret_One({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const drawerToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const drawer = (
    <div
      className={styles.drawer}
      onClick={close}
    >
      {demos.map((section) => {
        return (
          <nav
            key={section.name}
            className={styles.menu}
          >
            <h1 className={poiret.className}>{section.name}</h1>
            <ul className={styles.list}>
              {section.items.map((item) => (
                <NavItem
                  key={item.slug}
                  item={item}
                  close={close}
                  className={poiret.className}
                />
              ))}
            </ul>
          </nav>
        );
      })}
    </div>
  );
  return (
    <>
      <section className={styles.header}>
        <Link
          href="/"
          onClick={close}
          className={styles.button}
        >
          <span className="material-symbols-outlined">cabin</span>
        </Link>
        <button
          type="button"
          className={styles.button}
          onClick={drawerToggle}
        >
          {isOpen ? (
            <span className="material-symbols-outlined">pets</span>
          ) : (
            <span className="material-symbols-outlined">star</span>
          )}
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </button>
      </section>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={drawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

const NavItem = ({ item, className, close }: { item: Item; className: string; close: () => false | void }) => {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={styles.item}
    >
      <span className="material-symbols-outlined">{item.icon}</span>
      <p className={className}>{item.name}</p>
    </Link>
  );
};

export default Navbar;
