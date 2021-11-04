import styles from './error.module.css';

const Error = ({ error, location: { state } }) => {
  const errorMessage = error || state?.error || 'Error Page!';

  return <h2 className={styles.error}>{errorMessage}</h2>;
};

export default Error;
