import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';
import { loadProducts } from '../../redux/actions';
import {
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';
import styles from './menu.module.css';

const Menu = ({ menu, restId, loadProducts, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) loadProducts(restId);
  }, [restId, loadProducts, loading, loaded]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  loading: productsLoadingSelector(state, props),
  loaded: productsLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
