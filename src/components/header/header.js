import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';
import { changeActiveRestaurantTab } from '../../redux/actions';

const Header = ({ changeActiveRestaurantTab }) => (
  <header className={styles.header}>
    <Link to="/restaurants" onClick={() => changeActiveRestaurantTab('menu')}>
      <Logo />
    </Link>
  </header>
);

const mapDispatchToProps = {
  changeActiveRestaurantTab,
};

export default connect(null, mapDispatchToProps)(Header);
