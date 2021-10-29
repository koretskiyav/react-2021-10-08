import { Component } from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import {
  productLoadedSelector,
  productLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    if (!this.props.loading && !this.props.loaded)
      this.props.loadProductList(this.props.restId);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.props.loading) return <Loader />;
    if (!this.props.loaded) return 'No data :(';

    const { menu } = this.props;

    if (this.state.error) {
      return <p>Меню этого ресторана сейчас недоступно :(</p>;
    }

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
  }
}

const mapStateToProps = (state, props) => ({
  loading: productLoadingSelector(state, props),
  loaded: productLoadedSelector(state, props),
  restId: props.restId,
});

const mapDispatchToProps = (dispatch) => ({
  loadProductList: (restId) => dispatch(loadProducts(restId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
