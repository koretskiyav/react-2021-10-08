import ReactDOM from 'react-dom';
import App from './components/app';
import { restaurants } from './fixtures';
import store from './redux/store';
import './index.css';

// DEV ONLY!!!
window.store = store;

ReactDOM.render(
  <App restaurants={restaurants} />,
  document.getElementById('root')
);
