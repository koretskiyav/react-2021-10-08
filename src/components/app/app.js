import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';
import orderErrorPage from '../orderErrorPage';
import { MoneyProvider } from '../../contexts/money-context';

const App = () => {
  const [money, setMoney] = useState('USD');
  const [name, setName] = useState('Andrey');
  return (
    <div>
      <MoneyProvider value={{ money, setMoney }}>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/failedOrder" component={orderErrorPage} />
            <Route path="/error" component={() => <h2>Error Page!</h2>} />
            <Route
              path="/successOrder"
              component={() => <h2>Спасибо за заказ!</h2>}
            />
            <Route component={() => <h2>404 - Not found :(</h2>} />
          </Switch>
        </UserProvider>
      </MoneyProvider>
    </div>
  );
};

export default App;
