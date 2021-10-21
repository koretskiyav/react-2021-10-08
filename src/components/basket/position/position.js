import PropTypes from 'prop-types';
import styles from './position.module.css';
import Button from '../../button';

function Position({ product, amount, decrement, increment, remove }) {
  const { id, name, price } = product;

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <p>
          <b>{name} </b> -
        </p>
        <p>{amount} PCS - </p>
        <p>{amount * price} $</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => decrement(id)} icon="minus" />
        <Button onClick={() => increment(id)} icon="plus" />
        <Button onClick={() => remove(id)} icon="remove" />
      </div>
    </div>
  );
}

Position.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
  amount: PropTypes.number.isRequired,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  remove: PropTypes.func,
};

export default Position;
