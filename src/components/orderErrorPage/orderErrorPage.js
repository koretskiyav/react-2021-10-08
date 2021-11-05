import { connect } from 'react-redux';
import { orderErrorSelector } from '../../redux/selectors';

function orderErrorPage({ orderError }) {
  return <h2>{orderError}</h2>;
}

const mapStateToProps = (state) => ({
  orderError: orderErrorSelector(state),
});
export default connect(mapStateToProps)(orderErrorPage);
