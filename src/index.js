import ReactDOM from 'react-dom';
import App from './components/app';
import { restaurants } from './fixtures';
import './index.css';

ReactDOM.render(
  <App restaurants={restaurants} />,
  document.getElementById('root')
);
