
import { createContext } from 'react';

export const currencyContext = createContext('Default currency');

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
