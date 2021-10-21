import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LineItem from './lineItem';

const propTypes = {
  order: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  orderTotal: PropTypes.number,
};

const defaultProps = {
  orderTotal: 0,
};

function Basket({ order, orderTotal }) {
  const orderEl = Object.entries(order).map(([id, amount]) => {
    return <LineItem {...{ id, amount }} key={id} />;
  });

  return (
    <div>
      <h2>BASKET</h2>
      <h3>basket total: {orderTotal}</h3>
      {orderEl}
    </div>
  );
}

Basket.propTypes = propTypes;
Basket.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  order: state.order,
  orderTotal: state.basket.orderTotal,
});

export default connect(mapStateToProps)(Basket);
