import { UserConsumer } from '../../contexts/user-context';
import styles from './thankYou.module.css';

const ThankYou = () => (
  <h2 className={styles.thankYou}>
    <UserConsumer>
      {({ name }) => `Thanks ${name} for your order!`}
    </UserConsumer>
  </h2>
);

export default ThankYou;
