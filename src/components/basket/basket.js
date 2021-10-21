import styles from './basket.module.css';
import Product from '../product';
import store from '../../redux/store';
import { useSelector } from 'react-redux';
import { decrement, increment, dropfrombasket } from '../../redux/actions';
import Button from '../button';
import { connect } from 'react-redux';
import Basketprod from './basketprod';

function Basket({ list, decrement, increment }) {
  const orderlist = useSelector((state) => state.order);
  let total = 0;
  let hide = styles.hidden;
  return (
    <div>
      {list.map((prod) => {
        if (orderlist[prod.id]) {
          hide = styles.total;
          total += prod.price * orderlist[prod.id];
          return (
            <Basketprod
              key={prod.id}
              product={prod}
              order={orderlist[prod.id]}
            />
          );
        }
      })}
      <div className={hide}>Total: {total}$</div>
    </div>
  );
}
const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});
export default connect(mapDispatchToProps)(Basket);
