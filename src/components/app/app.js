import { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';
import propTypes from 'prop-types';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: propTypes.array.isRequired,
};
