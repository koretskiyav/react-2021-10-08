import Product from './product';
import styles from './menu.module.css';

export default function Menu({ menu }) {
  return (
    <div className={styles.wrapper}>
      <h3>Menu</h3>
      <div className={styles.product__list}>
        {menu.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
