import { Component } from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import styles from './menu.module.css';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import { menuLoadedSelector, menuLoadingSelector } from '../../redux/selectors';

class Menu extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    loading: PropTypes.bool,
    loadProducts: PropTypes.func.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount({ prevId } = {}) {
    const { id, loading, loadProducts } = this.props;

    if ((!!prevId && prevId === id) || loading) return;

    loadProducts(id);
  }

  render() {
    const { menu, loading, loaded } = this.props;

    if (this.state.error) {
      return <p>Меню этого ресторана сейчас недоступно :(</p>;
    }

    const products = loading ? (
      <Loader />
    ) : !loaded ? (
      'no data :('
    ) : (
      menu.map((id) => <Product key={id} id={id} />)
    );

    return (
      <div className={styles.menu}>
        <div>{products}</div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: menuLoadingSelector(state),
  loaded: menuLoadedSelector(state),
});

const mapDispathcToProps = (dispatch, props) => ({
  loadProducts: () => dispatch(loadProducts(props.id)),
});

export default connect(mapStateToProps, mapDispathcToProps)(Menu);
