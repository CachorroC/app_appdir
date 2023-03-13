'use client';
import styles from '#@/styles/scss/navbar.module.scss';
import { demos, type Item } from '#@/lib/links';
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
            <h1 className={poiret.className}>
              {section.name}
            </h1>
            <ul className={styles.list}>
              {section.items.map((link) => (
                <NavItem
                  key={link.slug}
                  link={link}
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
          <span className="material-symbols-rounded">
            cabin
          </span>
        </Link>
        <button
          type="button"
          className={styles.button}
          onClick={drawerToggle}
        >
          {isOpen ? (
            <span className="material-symbols-rounded">
              pets
            </span>
          ) : (
            <span className="material-symbols-rounded">
              star
            </span>
          )}
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="material-symbols-rounded">
              close
            </span>
          ) : (
            <span className="material-symbols-rounded">
              menu
            </span>
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

const NavItem = ({
  link,
  className,
  close,
}: {
  link: Item;
  className: string;
  close: () => false | void;
}) => {
  const segment = useSelectedLayoutSegment();
  const isActive = link.slug === segment;
  return (
    <Link
      onClick={close}
      href={`/${link.slug}`}
      className={styles.link}
    >
      <span className="material-symbols-outlined">
        {link.icon}
      </span>
      <p className={className}>{link.name}</p>
    </Link>
  );
};

export default Navbar;
