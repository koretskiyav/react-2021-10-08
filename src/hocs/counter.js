import PropTypes from 'prop-types';

import useAmount from '../hooks/use-amount';

const propTypes = {
  amount: PropTypes.number,
  wrappedComponent: PropTypes.func
};

const defaultProps = {
  amount: 0
};

const Counter = (props) => {
  const { wrappedComponent: WrappedComponent, amount } = props;
  const amountProps = useAmount(amount);

  return <WrappedComponent {...props} {...amountProps} />;
};

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default (WrappedComponent) => (props) => {
  return <Counter {...props} wrappedComponent={WrappedComponent} />
};
