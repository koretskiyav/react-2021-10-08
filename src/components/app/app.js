import { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';

export default class App extends PureComponent {
  static defaultProps = {
    restaurants: [],
  };

  render() {
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
