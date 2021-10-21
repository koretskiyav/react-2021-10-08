import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { setProducts } from '../../redux/actions';

class App extends PureComponent {
  render() {
    // for using Basket from any place in code
    this.props.setProducts(this.props.restaurants);

    return (
      <div>
        <Basket />
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
  setProducts: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setProducts,
};

export default connect(null, mapDispatchToProps)(App);
