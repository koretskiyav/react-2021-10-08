import { ReactComponent as Logo } from '../../icons/logo.svg';
import Basket from '../basket/basket';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Basket />
  </header>
);

export default Header;
