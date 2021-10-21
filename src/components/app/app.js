import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import styles from './app.module.css';

export default class App extends PureComponent {
  render() {
    this.products = this.props.restaurants.reduce(
      (products, restaurant) => [...products, ...restaurant.menu],
      []
    );

    return (
      <div>
        <Header />
        <div className={styles.container}>
          <div className={styles.main}>
            <Restaurants restaurants={this.props.restaurants} />
          </div>
          <div className={styles.basket}>
            <Basket products={this.products} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape(
      {
        menu: PropTypes.array,
      }.isRequired
    )
  ),
};
