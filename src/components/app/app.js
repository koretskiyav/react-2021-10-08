import { PureComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/restaurants" />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/error" component={() => <h2>Error Page!</h2>} />
          <Route component={() => <h2>404 - Not found :(</h2>} />
        </Switch>
      </div>
    );
  }
}
