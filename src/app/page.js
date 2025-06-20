"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { TbPackage, TbCertificate } from "react-icons/tb";
import { FaStarOfLife, FaShippingFast } from "react-icons/fa";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
export default function Home() {
  const theme = useSelector((state) => state.redux.theme);

  const shapes = [
    { name: "Round", img: "/photos/shapes/round.webp" },
    { name: "Peer", img: "/photos/shapes/pear.webp" },
    { name: "Oval", img: "/photos/shapes/oval.webp" },
    { name: "Radiant", img: "/photos/shapes/radiant.webp" },
    { name: "Emerald", img: "/photos/shapes/emerald.png" },
    { name: "Heart", img: "/photos/shapes/heart.webp" },
    { name: "Cushion", img: "/photos/shapes/cushion.webp" },
    { name: "Marquise", img: "/photos/shapes/marquise.webp" },
    { name: "Princess", img: "/photos/shapes/princess.png" },
  ];

  const category = [
    {
      name: "Rings",
      img: "/photos/Rings.webp",
      desc: "Elegant designs for every occasion.",
    },
    {
      name: "Earrings",
      img: "/photos/Earring.webp",
      desc: "Chic and timeless ear accents.",
    },
    {
      name: "Pendants",
      img: "/photos/Pendants.webp",
      desc: "Graceful centerpieces for your look.",
    },
    {
      name: "Bracelets",
      img: "/photos/Bracelets.webp",
      desc: "Delicate wrist adornments.",
    },
    {
      name: "Bangles",
      img: "/photos/Bangles.webp",
      desc: "Bold, circular statements.",
    },
    {
      name: "Necklaces",
      img: "/photos/Necklaces.webp",
      desc: "Striking neckwear that shines.",
    },
  ];

  const features = [
    {
      icon: <TbCertificate />,
      title: "Certified Diamonds",
      desc: "Authenticity and quality you can trust.",
    },
    {
      icon: <TbPackage />,
      title: "Luxury Packaging",
      desc: "Elegant wrapping for special moments.",
    },
    {
      icon: <FaShippingFast />,
      title: "Insured Shipping",
      desc: "Fast, safe & insured delivery.",
    },
    {
      icon: <FaStarOfLife />,
      title: "Lifetime Exchange",
      desc: "Forever assurance with every piece.",
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Discover Exquisite{" "}
              <span className={styles.brand}>Diamond Jewellery</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Shop the finest collection of diamond rings, earrings, necklaces,
              bangles, and more.
            </p>
            <div className={styles.heroActions}>
              <Link href="/products" className={styles.primaryButton}>
                Shop Diamonds
              </Link>
              <Link href="/products" className={styles.secondaryButton}>
                Browse Collection
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            {theme === "light" ? (
              <Image
                src="/heroImage/light.webp"
                alt="Diamond Jewellery"
                width={800}
                height={500}
                className={styles.image}
                priority
              />
            ) : (
              <Image
                src="/heroImage/dark.webp"
                alt="Diamond Jewellery"
                width={800}
                height={500}
                className={styles.image}
                priority
              />
            )}
          </div>
        </section>

        <section className={styles.shopByShape}>
          <h2 className={styles.sectionTitle}>Shop by Shape</h2>
          <div className={styles.shapesRow}>
            {shapes.map(({ name, img }) => (
              <Link href="/products" key={name} className={styles.shapeCard}>
                <Image
                  src={img}
                  alt={name}
                  width={120}
                  height={120}
                  className={styles.shapeImg}
                />
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.shopByCategory}>
          <h2 className={styles.sectionTitle}>Shop By Category</h2>
          <div className={styles.shapesRow}>
            {category.map(({ name, img, desc }) => (
              <Link href="/products" key={name} className={styles.shapeCard}>
                <Image
                  src={img}
                  alt={name}
                  width={360}
                  height={1080}
                  className={styles.shapeImg}
                />
                <div>
                  <span>{name}</span>
                  <p>{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <div className={styles.featuresGrid}>
            {features.map(({ icon, title, desc }) => (
              <div key={title} className={styles.featureCard}>
                <div className={styles.iconCtn}>
                  <span>{icon}</span>
                  <h3>{title}</h3>
                </div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Ready to Shine?</h2>
            <p>Explore our exclusive diamond jewellery collection now.</p>
            <Link href="/products" className={styles.ctaButton}>
              View All Jewellery
            </Link>
          </div>
        </section>
      </main>
      <div className={styles.devider} />
      <Footer />
    </div>
  );
}
