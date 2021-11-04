import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';
import { currencyContext, CURRENCIES } from '../../contexts/currency-context';
import Button from '../button/button';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { currency, setCurrency } = useContext(currencyContext);

  const currenciesList = Object.keys(CURRENCIES).map((item) => {
    const selected = item === currency;
    return (
      <Button
        secondary={!selected}
        primary={selected}
        key={item}
        onClick={() => setCurrency(item)}
      >
        {item}
      </Button>
    );
  });

  return (
    <header className={styles.header} onClick={() => setName('Igor')}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <div style={{ display: 'flex' }}>{currenciesList}</div>
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
