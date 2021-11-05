
import { connect } from 'react-redux';
import { errorSelector } from '../../redux/selectors';
import styles from './error.module.css';

function Error({ errorMessage }) {
  return (
    <div className={styles.container}>
      <h1>Error!</h1>
      <p>{errorMessage}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    errorMessage: errorSelector(state),
  };
}

export default connect(mapStateToProps)(Error);