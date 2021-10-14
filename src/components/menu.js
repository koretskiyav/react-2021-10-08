import Product from './Product';

export default function Menu({ menu }) {
  return (
    <section className="menu">
      <h3>Menu</h3>
      <div>
        {menu.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
