import { connect } from 'react-redux';
import styles from './basket.module.css';
import Button from '../button';
import { decrement, increment, remove } from '../../redux/actions';

const Basket = ({order, increment, decrement, remove}) => {
  return (
    <div className={styles.basket}>
      <ul>
        {Object.keys(order).map((el) => {
          const { name, amount, price } = order[el];

          if (!amount) {
            delete order[el];
            return;
          }

          return (
            <li key={el} className={styles.item}>
              <span>{name}</span>
              <div className={styles.item}>
                <Button icon="minus" onClick={() => {
                  decrement(el);
                }} />
                <div className={styles.amount}>{amount}</div>
                <Button icon="plus" onClick={() => {
                  increment(el);
                }} />
              </div>
              <div>{`${amount > 1 ? price * amount : price}$`}</div>
              <button onClick={() => {
                  remove(el);
                }}>X</button>
            </li>
          );
        })}

      </ul>
      <div>
        {`Total: ${Object.keys(order).reduce((result, current) => {
          const price = order[current].amount > 1 ? order[current].price * order[current].amount : order[current].price
          return result + price;
        }, 0)}`}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  increment: (el) => dispatch(increment(el, props.order[el].name, props.order[el].price)),
  decrement: (el) => dispatch(decrement(el, props.order[el].name, props.order[el].price)),
  remove: (el) => dispatch(remove(el)),
});

export default connect(null, mapDispatchToProps)(Basket);
