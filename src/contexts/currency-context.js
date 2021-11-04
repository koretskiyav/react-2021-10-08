import { createContext } from 'react';
import currency from '../hocs/currency';

export const currencyContext = createContext('Default currency');
const { Provider, Consumer } = currencyContext;

export const CurrencyProvider = currency(Provider);
export const CurrencyConsumer = Consumer;
