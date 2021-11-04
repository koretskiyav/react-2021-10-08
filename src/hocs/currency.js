import { useCallback, useState } from 'react';

export const currencies = {
  USD: { sign: '$', rate: 1 },
  EUR: { sign: '€', rate: 0.86 },
  PLN: { sign: 'zł', rate: 3.95 },
};

export default (WrappedComponent) => (props) => {
  const [currencyCode, setCurrencyCode] = useState('USD');
  const convert = useCallback(
    (amount) => {
      const { rate, sign } = currencies[currencyCode];

      return `${(amount * rate).toFixed(2)} ${sign}`;
    },
    [currencyCode]
  );
  return <WrappedComponent {...props} value={{ currencyCode, setCurrencyCode, convert }} />;
};
