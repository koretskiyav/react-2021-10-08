import { connect } from 'react-redux';
import BasketProduct from './basketProduct';
import styles from '../product/product.module.css';

const Basket = ({ order, products }) => {
  const basketProducts = [];
  for (const [id, amount] of Object.entries(order)) {
    const product = products.filter((product) => product.id === id)[0];
    basketProducts.push({
      id: id,
      name: product.name,
      sum: product.price * amount,
      amount: amount,
    });
  }

  const basketSum = basketProducts.reduce(
    (acc, product) => acc + product.sum,
    0
  );

  return (
    <div>
      <h1>Basket</h1>
      {basketProducts.map((product) => (
        <BasketProduct key={product.id} product={product} />
      ))}
      <div className={styles.price}>Total: {basketSum} $</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);
