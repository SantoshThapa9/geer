"use client";

import { useState, useEffect, useMemo } from "react";
import styles from "./products.module.scss";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import Image from "next/image";
const CATEGORIES = [
  "All",
  "Rings",
  "Earrings",
  "Necklace",
  "Bracelets and Bangles",
  "Pendant And Mangalsutra",
  "Other Jewellery",
];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [collectionFilter, setCollectionFilter] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const toggleCollection = (item) =>
    setCollectionFilter((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setCollectionFilter([]);
    setPriceRange([0, 200000]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const inPriceRange =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      const inCollection =
        collectionFilter.length === 0 ||
        (product.collection && collectionFilter.includes(product.collection));

      return matchesSearch && matchesCategory && inPriceRange && inCollection;
    });
  }, [products, searchTerm, selectedCategory, collectionFilter, priceRange]);

  const shouldShowClearBtn =
    searchTerm ||
    selectedCategory !== "All" ||
    collectionFilter.length ||
    priceRange[0] > 0 ||
    priceRange[1] < 200000;

  if (loading) return <div className={styles.loading}>Loading products...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <header>
        <Image
          className={styles.image}
          src="/photos/ProductHeader.webp"
          height={300}
          width={1080}
          alt="product"
          priority
        />
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeContent}>
            <span>10% OFF on Diamonds + 50% OFF on Making Charges.</span>
            <span>10% OFF on Diamonds + 50% OFF on Making Charges.</span>
            <span>10% OFF on Diamonds + 50% OFF on Making Charges.</span>
            <span>10% OFF on Diamonds + 50% OFF on Making Charges.</span>
          </div>
        </div>

        <h1>Our Products</h1>
        <p>Discover amazing deals on premium diamond jewelry</p>
      </header>

      <div className={styles.layout}>
        <FilterSidebar
          collectionFilter={collectionFilter}
          toggleCollection={toggleCollection}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <main className={styles.mainContent}>
          <div className={styles.filters}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <div className={styles.customSelectWrapper}>
              <button className={styles.customSelectTrigger}>
                {selectedCategory}
              </button>
              <ul className={styles.customOptions}>
                {CATEGORIES.map((cat) => (
                  <li
                    key={cat}
                    className={styles.customOption}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.resultsCount}>
            {filteredProducts.length} product
            {filteredProducts.length !== 1 && "s"} found
            {shouldShowClearBtn && (
              <button onClick={clearAllFilters} className={styles.clearFilters}>
                Clear all filters
              </button>
            )}
          </div>

          <div className={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
