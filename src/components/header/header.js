import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { currencyContext } from '../../contexts/currency-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => {
  const { currency, setCurrency } = useContext(currencyContext);
  const currencies = ['$', '₽', '₴']

  return (
    <header className={styles.header} >

      <Link className={styles.link} to="/restaurants">
        <Logo />
      </Link>

      <div className={styles.currencies}>
        {currencies.map((curr, id) =>
        (<h2
          key={id}
          className={curr === currency && styles.active}
          onClick={() => setCurrency(curr)}
        >{curr}</h2>))
        }
      </div>

    </header>
  );
};

export default Header;
