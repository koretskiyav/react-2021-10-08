import Product from './Product';
import styles from './menu.module.css'

export default function Menu({ menu }) {
  return (
    <section className={styles.menu}>
      <h3>Menu</h3>
      <div>
        {menu.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
