import { useContext } from 'react';
import currencyContext from '../contexts/currency-context';

export function useConvert() {
  const { convert } = useContext(currencyContext);
  return convert;
}
