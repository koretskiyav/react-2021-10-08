import { useSelector, useDispatch } from 'react-redux';
import { object } from 'prop-types';
import styles from './basket.module.css';

const PrintOrder = ({ orderList, removeItem }) => {
  let total = [];
  const orderItem = orderList.map((item) => {
    total.push(item.amount * item.price);
    return (
      <div key={item.id} className={styles.item}>
        <span
          className={styles.itemDelete}
          onClick={() => removeItem({ type: 'delete', item })}
        >
          X
        </span>
        <span className={styles.itemName}>{item.name}</span>
        <span
          className={styles.itemInfo}
        >{`for 1 item is ${item.price}$`}</span>
        <span
          className={styles.itemInfo}
        >{`Total amount is ${item.amount}`}</span>
        <span className={styles.itemInfo}>{`Total price is ${
          item.amount * item.price
        }$`}</span>
      </div>
    );
  });

  const totalSum = total.reduce((sum, current) => {
    return sum + current;
  }, 0);

  return (
    <div>
      <p>Your order:</p>
      {orderItem}
      <p
        className={styles.itemTotal}
      >{`Total sum for order is: ${totalSum}$`}</p>
    </div>
  );
};

function Basket() {
  const dispatch = useDispatch();
  const orderList = [];
  const order = useSelector((state) =>
    Object.entries(state.order).map(([key, value]) => {
      console.log(key, value);
      if (key.includes('product')) {
        return orderList.push(value);
      }
    })
  );

  return orderList.length ? (
    <PrintOrder orderList={orderList} removeItem={dispatch} />
  ) : null;
}

export default Basket;
