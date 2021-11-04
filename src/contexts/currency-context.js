import { createContext } from 'react';

export const DEFAULT_CURRENCY = 'USD';
export const CURRENCIES = {
  USD: 1,
  RUB: 72,
  BYN: 2.5,
  UAH: 27,
};

export const currencyContext = createContext(DEFAULT_CURRENCY);

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;

export const toCurrency = (value) => (
  <CurrencyConsumer>
    {({ currency }) => `${value * CURRENCIES[currency]} ${currency}`}
  </CurrencyConsumer>
);
