import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';
import Error from '../error';
import {
  CurrencyProvider,
  DEFAULT_CURRENCY,
} from '../../contexts/currency-context';

const App = () => {
  const [name, setName] = useState('Andrey');
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{ currency, setCurrency }}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/error" component={Error} />
            <Route
              path="/success"
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
