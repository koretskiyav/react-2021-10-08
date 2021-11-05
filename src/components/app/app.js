import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import OrderError from '../order-result';
import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';
import { CurrencyProvider } from '../../contexts/currency-context';

const App = () => {
  const [name, setName] = useState('Andrey');
  const [current, setCurrent] = useState('dollar');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{ current, setCurrent }}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/error" component={() => <h2>Error Page!</h2>} />
            <Route path="/orser-failed" component={OrderError} />
            <Route
              path="/orser-success"
              component={() => <h2>Thanks for order!</h2>}
            />
            <Route component={() => <h2>404 - Not found :(</h2>} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
