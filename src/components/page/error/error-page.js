import { orderErrorSelector } from '../../../redux/selectors';
import { connect } from 'react-redux';
import Price from '../../price';

const usdRegExp = new RegExp(/\$(\d+)/gi);

function ErrorPage({ orderError }) {
  return (
    <div>
      <h2>Error Page!</h2>
      {orderError &&
        orderError.split(' ').map((word, i) => {
          return (
            <span key={i}>
              {usdRegExp.test(word) ? (
                <Price value={parseInt(word.slice(1), 10)} />
              ) : (
                word
              )}{' '}
            </span>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  orderError: orderErrorSelector(state),
});

export default connect(mapStateToProps)(ErrorPage);
