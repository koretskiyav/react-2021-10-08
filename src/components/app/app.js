import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket/basket';

export default class App extends PureComponent {
  render() {
    const productlist = this.props.restaurants.reduce((acc, curr) => {
      return [...acc, ...curr.menu];
    }, []);

    return (
      <div>
        <Header />
        <Basket list={productlist} />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
