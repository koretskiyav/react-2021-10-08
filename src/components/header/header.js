import { useContext } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import {
  currDictionary,
  currencyContext,
} from '../../contexts/currency-context';
import styles from './header.module.css';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { current, setCurrent } = useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Igor')}>
      <div className={styles.tabs}>
        {Object.entries(currDictionary).map(([id, curr]) => (
          <span
            key={id}
            className={cn(styles.tab, { [styles.active]: id === current })}
            onClick={() => setCurrent(id)}
          >
            {curr.name}
          </span>
        ))}
      </div>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
