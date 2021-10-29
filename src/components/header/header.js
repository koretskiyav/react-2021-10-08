import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link to="/restaurants">
      <Logo />
    </Link>
  </header>
);

export default Header;
