import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Position from './position/position';
import { decrement, increment, remove } from '../../redux/actions';

function Basket({ products, order, decrement, increment, remove }) {
  const total = products.reduce(
    (sum, { id, price }) => sum + price * (order[id] || 0),
    0
  );
  return (
    <div>
      <h3>Basket</h3>
      <ul>
        {products
          .filter(({ id }) => order[id] > 0)
          .map((product) => (
            <li key={product.id}>
              <Position
                product={product}
                amount={order[product.id]}
                decrement={decrement}
                increment={increment}
                remove={remove}
              />
            </li>
          ))}
      </ul>
      <h4>Total: {total} $</h4>
    </div>
  );
}

Basket.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
