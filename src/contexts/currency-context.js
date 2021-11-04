import { createContext } from 'react';

export const currencyContext = createContext('USD');

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
