import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import OrderDone from '../orderdone';
import OrderError from '../orderError';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider } from '../../contexts/currency-context';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Andrey');
  const [currency, setCurrency] = useState('USD');
  let rate = 1;
  let symbol = '$';
  switch (currency) {
    case 'USD':
      rate = 1;
      symbol = '$';
      break;
    case 'EUR':
      rate = 0.86;
      symbol = '€';
      break;
    case 'RUB':
      rate = 71.37;
      symbol = '₽';
      break;
  }
  return (
    <div>
      <CurrencyProvider value={{ currency, setCurrency, rate, symbol }}>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/done" component={OrderDone} />
            <Route path="/ordererror" component={OrderError} />
            <Route path="/error" component={() => <h2>Error Page!</h2>} />
            <Route component={() => <h2>404 - Not found :(</h2>} />
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};

export default App;
