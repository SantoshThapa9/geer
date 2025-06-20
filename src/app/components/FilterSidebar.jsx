import styles from "../products/products.module.scss";

const FilterSidebar = ({
  collectionFilter,
  toggleCollection,
  priceRange,
  setPriceRange,
}) => {
  const collections = [
    "Casual",
    "Classic",
    "Cocktail",
    "Delicate",
    "Engagement",
    "Eternity",
    "Ring",
  ];

  const minGap = 1000;
  const min = 0;
  const max = 200000;

  const handleMinChange = (e) => {
    const value = Math.min(+e.target.value, priceRange[1] - minGap);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(+e.target.value, priceRange[0] + minGap);
    setPriceRange([priceRange[0], value]);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.filterGroup}>
        <h4>Collection</h4>
        {collections.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              onChange={() => toggleCollection(item)}
              checked={collectionFilter.includes(item)}
            />
            {item}
          </label>
        ))}
      </div>

      <h4>Price Range</h4>
      <input
        type="range"
        min={min}
        max={max}
        value={priceRange[1]}
        onChange={handleMaxChange}
      />

      <div className={styles.priceLabel}>
        ₹{priceRange[0]} - ₹{priceRange[1]}
      </div>
    </aside>
  );
};

export default FilterSidebar;
