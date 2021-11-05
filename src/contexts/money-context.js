import { createContext } from 'react';

export const moneyContext = createContext('default');

export const rateList = {
  USD: 1,
  EUR: 0.87,
  RUB: 71.45,
};

export const signList = {
  USD: '$',
  EUR: '€',
  RUB: '₽',
};

export function moneyRate(moneyName, amount) {
  return (moneyName * amount).toFixed(3);
}

export const MoneyProvider = moneyContext.Provider;
export const MoneyConsumer = moneyContext.Consumer;
