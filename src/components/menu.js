import Product from './product';
import Reviews from './reviews';

export default function Menu({ menu }) {
  return (
    <div>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
