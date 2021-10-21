import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import styles from './app.module.css';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <Restaurants restaurants={this.props.restaurants} />
          </div>
          <div className={styles.basket}>
            <Basket />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
