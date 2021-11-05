import { createContext, useState, useContext } from 'react';

const currencyContext = createContext();
const { Provider } = currencyContext;

const currenciesMap = {
  USD: { label: 'USD', rate: 1, sign: '$' },
  EUR: { label: 'EUR', rate: 1 / 1.15, sign: '€' },
  RUB: { label: 'RUB', rate: 72, sign: '₽' },
  UAH: { label: 'UAH', rate: 26, sign: '₴' },
};

const currencies = Object.entries(currenciesMap).map(([key, { label }]) => ({
  key,
  label,
}));

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('USD');
  const { rate, sign } = currenciesMap[currency];
  const convert = (amount) => `${(rate * amount).toFixed(2)} ${sign}`;

  return (
    <Provider value={{ currencies, currency, setCurrency, convert }}>
      {children}
    </Provider>
  );
}

export function Convert({ value }) {
  const { convert } = useContext(currencyContext);
  return convert(value);
}

export default currencyContext;
