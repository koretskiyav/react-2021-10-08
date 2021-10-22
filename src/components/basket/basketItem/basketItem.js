import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../button';
import Product from '../../product';

import { remove } from '../../../redux/actions';

import styles from '../basket.module.css';

const BasketItem = ({ product, remove }) => {
  return (
    <div className={styles['item']}>
      <Button icon="cross" onClick={remove} />
      <Product product={product} />
      <p>{product.price * product.amount} $</p>
    </div>
  );
};

BasketItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.array,
  }).isRequired,
  // from connect
  remove: PropTypes.func,
}

const mapDispatchToProps = (dispatch, props) => ({
  remove: () => dispatch(remove(props.product)),
});

export default connect(null, mapDispatchToProps)(BasketItem);
