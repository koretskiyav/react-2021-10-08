import { connect } from 'react-redux';
import BasketItem from './basket-item';
import { restaurants } from '../../fixtures';
import { useMemo } from 'react';
import styles from './basket.module.css';
import PropTypes from 'prop-types';

function Basket({ order }) {
  const nonEmptyItems = useMemo(() => {
    return Object.keys(order).filter((orderId) => !!order[orderId]);
  }, [order]);

  const getTotal = useMemo(() => {
    return nonEmptyItems.reduce((acc, orderId) => {
      return acc + order[orderId] * menuStore[orderId].price;
    }, 0);
  }, [order, nonEmptyItems]);

  return (
    <div className={styles.basket}>
      <h2>Your receipt</h2>
      <div className={styles.basketList}>
        {nonEmptyItems.map((orderId) => {
          return (
            <BasketItem key={orderId} orderId={orderId} menu={menuStore} />
          );
        })}
      </div>
      <div className={styles.basketTotal}>Total: {getTotal} $</div>
    </div>
  );
}

const menuStore = restaurants.reduce((acc, restaurant) => {
  return {
    ...acc,
    ...restaurant.menu.reduce((menuAcc, item) => {
      return {
        ...menuAcc,
        [item.id]: item,
      };
    }, {}),
  };
}, {});

const mapStateToProps = (state) => ({
  order: state.order,
});

Basket.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Basket);
