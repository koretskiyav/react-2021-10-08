import { connect } from 'react-redux';
import { fetchValue } from '../../redux/selectors';

function OrderError(value) {
  return (
    <div style={{ fontSize: '64px', textAlign: 'center' }}> {value.value}</div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    value: fetchValue(state),
  };
};

export default connect(mapStateToProps)(OrderError);
