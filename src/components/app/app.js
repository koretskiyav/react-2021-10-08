import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Busket from '../busket';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
        <Busket restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
