import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader/loader';

import {
  activeIdRestaurantSelector,
  productsListSelector,
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';

import styles from './menu.module.css';
import { loadProducts } from '../../redux/actions';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    if (!this.props.loading && !this.props.loaded)
      this.props.loadProducts(this.props.activeId);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { products, loaded, loading } = this.props;

    if (this.state.error) {
      return <p>Меню этого ресторана сейчас недоступно :(</p>;
    }

    if (loading) return <Loader />;
    if (!loaded) return 'No data :(';

    return (
      <div className={styles.menu}>
        <div>
          {products.map(({ id }) => (
            <Product key={id} id={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  activeId: activeIdRestaurantSelector(state, props),
  products: productsListSelector(state, props),
  loading: productsLoadingSelector(state, props),
  loaded: productsLoadedSelector(state, props),
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: (id) => dispatch(loadProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
