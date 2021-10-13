import Product from './product';

export default function Menu({ menu }) {
  return (
    <div>
      <h3>Menu</h3>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
