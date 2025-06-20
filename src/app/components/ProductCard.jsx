import Link from "next/link";
import Image from "next/image";
import styles from "../products/products.module.scss";

const ProductCard = ({ product }) => {
  const calculateDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const discountPercentage = hasDiscount
    ? calculateDiscount(product.oldPrice, product.price)
    : 0;

  return (
    <Link href={`/products/${product.id}`} className={styles.productCard}>
      <div className={styles.productImage}>
        {hasDiscount && (
          <div className={styles.offerBadge}>{discountPercentage}% OFF</div>
        )}
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productCategory}>{product.category}</p>

        <div className={styles.productPrice}>
          <span className={styles.newPrice}>{formatPrice(product.price)}</span>

          {hasDiscount && (
            <>
              <span className={styles.oldPrice}>
                {formatPrice(product.oldPrice)}
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
