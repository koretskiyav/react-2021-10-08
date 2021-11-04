import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import {
  CurrencyProvider,
  defaultConverter,
  updateConverter,
} from '../../contexts/currency-context';
import { useState } from 'react';
import ErrorPage from '../page/error';
import SuccessPage from '../page/success';

const App = () => {
  const [name, setName] = useState('Andrey');
  const [converter, setConverter] = useState(defaultConverter);

  return (
    <div>
      <CurrencyProvider
        value={{
          converter,
          update: updateConverter(setConverter),
        }}
      >
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/success" component={SuccessPage} />
            <Route component={() => <h2>404 - Not found :(</h2>} />
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};

export default App;
