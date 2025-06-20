"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/ReduxSlice";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import dynamic from "next/dynamic";
import { useState } from "react";
const PiSunLight = dynamic(
  () => import("react-icons/pi").then((mod) => mod.PiSunLight),
  { ssr: false }
);
const PiMoonStarsLight = dynamic(
  () => import("react-icons/pi").then((mod) => mod.PiMoonStarsLight),
  { ssr: false }
);


export default function Navigation() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.redux.theme);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", match: pathname === "/" },
    {
      href: "/products",
      label: "Products",
      match: pathname.startsWith("/products"),
    },
    { href: "/admin", label: "Admin", match: pathname === "/admin" },
  ];

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.offerBanner}>
          10% OFF on Diamonds + 50% OFF on Making Charges.
        </div>

        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <p className={styles.gradientText}>Geer.</p>
            <span className={styles.gradientText}>in</span>
          </Link>

          <button
            className={styles.menuToggle}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <RxHamburgerMenu />
          </button>

          <div className={styles.mainLinks}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  item.match ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => dispatch(toggleTheme())}
              className={styles.themeToggle}
            >
              {theme === "light" ? <PiSunLight /> : <PiMoonStarsLight />}

              <span>Theme</span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <RxCross2 />
        </button>

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.sidebarLink}
            onClick={() => setSidebarOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        <button
          className={styles.sidebarLink}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {theme === "light" ? <PiSunLight /> : <PiMoonStarsLight />} Theme
        </button>
      </div>
    </>
  );
}
