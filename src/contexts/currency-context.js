import { createContext } from 'react';

const CODES = {
  RUR: 'RUR',
  USD: 'USD',
  EUR: 'EUR',
};

const SYMBOLS = {
  RUR: '₽',
  USD: '$',
  EUR: '€',
};

const RATE = {
  RUR: 70,
  USD: 1,
  EUR: 0.7,
};

function price(usdPrice) {
  return (usdPrice * RATE[this.code]).toFixed(2);
}

function createConverter(code) {
  return {
    CODES,
    code,
    price,
    symbol: SYMBOLS[code],
  };
}

export function updateConverter(setState) {
  return function (code) {
    setState(createConverter(code));
  };
}

export const defaultConverter = createConverter(CODES.USD);

export const currencyContext = createContext({
  converter: defaultConverter,
  update: () => {},
});

export const CurrencyProvider = currencyContext.Provider;

export const CurrencyConsumer = currencyContext.Consumer;
