import { connect } from 'react-redux';
import { chechoutErrorSelector } from '../../redux/selectors';

const OrderError = ({ error = '' }) => {
  return (
    <div>
      <h2>Wrong order!</h2>
      <p>{error}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: chechoutErrorSelector(state),
});

export default connect(mapStateToProps)(OrderError);
