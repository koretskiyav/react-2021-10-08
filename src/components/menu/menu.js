import { useEffect } from 'react';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import Loader from '../loader';
import { loadProducts } from '../../redux/actions';
import { connect } from 'react-redux';
import {
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';

function Menu({ menu, id, productsLoading, productsLoaded, loadProducts }) {
  useEffect(() => {
    if (!productsLoading && !productsLoaded) loadProducts(id);
  }, [id, productsLoading, productsLoaded, loadProducts]);

  if (productsLoading !== false) {
    return <Loader />;
  }

  if (!productsLoaded) {
    return <div className={styles.menu}>'No data :('</div>;
  }

  return (
    <div className={styles.menu}>
      <div>
        {productsLoaded &&
          menu.map((productId) => <Product key={productId} id={productId} />)}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  productsLoading: productsLoadingSelector(state, props),
  productsLoaded: productsLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
