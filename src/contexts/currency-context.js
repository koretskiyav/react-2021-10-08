import { createContext } from 'react';

export const currDictionary = {
  ruble: {
    name: 'руб.',
    rateToDollar: 70,
  },
  dollar: {
    name: '$',
    rateToDollar: 1,
  },
  euro: {
    name: 'eur.',
    rateToDollar: 0.8,
  },
};

export const getMoneyInCurr = (value, curr, currDictionary) => {
  const countedVal = value * currDictionary[curr].rateToDollar;
  const roundedVal = parseInt(countedVal * 100) / 100;
  return `${roundedVal} ${currDictionary[curr].name}`;
};

export const currencyContext = createContext();

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
