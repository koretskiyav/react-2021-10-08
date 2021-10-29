import { Component } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';
import { loadProducts } from '../../redux/actions';
import styles from './menu.module.css';
import {
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';

function Menu({ menu, activeId, loading, loaded, loadProducts }) {
  console.log(activeId);
  useEffect(() => {
    if (!loading && !loaded) loadProducts();
  }, [loading, loaded, loadProducts]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((id) => (
          <Product key={id} id={id} activeId={activeId} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  loading: productsLoadingSelector(state, props),
  loaded: productsLoadedSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  loadProducts: () => dispatch(loadProducts(props.activeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
