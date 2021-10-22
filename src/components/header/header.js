import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';
import Basket from "../basket/basket";

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Basket />
  </header>
);

export default Header;
