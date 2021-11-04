import { useContext } from 'react';
import { connect } from 'react-redux';
import {
  currencyContext,
  DEFAULT_CURRENCY,
  toCurrency,
} from '../../contexts/currency-context';
import { orderErrorSelector, orderInfoSelector } from '../../redux/selectors';

function Error({ info, error }) {
  const { currency } = useContext(currencyContext);
  const currencyInfo =
    info && currency !== DEFAULT_CURRENCY ? (
      <i>$1 equals to {toCurrency(1)}</i>
    ) : (
      ''
    );

  return (
    <>
      <h2>Something went wrong!</h2>
      <p>{info}</p>
      {currencyInfo}
      <p>{error}</p>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    info: orderInfoSelector(state),
    error: orderErrorSelector(state),
  };
};

export default connect(mapStateToProps)(Error);
