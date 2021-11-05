import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Andrey');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/restaurants" />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/error" component={() => <h2>Error Page!</h2>} />
          <Route path="/success" component={() => <h2>Thanks for your order!</h2>} />
          <Route component={() => <h2>404 - Not found :(</h2>} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
