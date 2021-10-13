import { PureComponent } from 'react';
import Restaurants from './restaurants';
import styles from './app.module.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
