import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../button';

import { useConvert } from '../../hooks/use-convert';

import { orderErrorSelector } from '../../redux/selectors';

import styles from './order-error.module.css';

const OrderError = ({ error }) => {
  const convert = useConvert();
  const errorText = error?.replace(/\$(\d+)/gi, (_, t) => convert(t));

  return (
    <h1 className={styles.page}>
      <p>{errorText}</p>
      <div className={styles.actions}>
        <Link to="/checkout">
          <Button primary block>
            back to checkout
          </Button>
        </Link>
      </div>
    </h1>
  );
};

export default connect((state) => ({
  error: orderErrorSelector(state),
}))(OrderError);
