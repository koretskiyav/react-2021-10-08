import { useCallback, useContext } from 'react';
import { currencies } from '../../hocs/currency';
import { currencyContext } from '../../contexts/currency-context';

const CurrencySelect = () => {
  const { currencyCode, setCurrencyCode } = useContext(currencyContext);
  const handleCurrencyChange = useCallback(
    ({ target: { value } }) => {
      setCurrencyCode(value);
    },
    [setCurrencyCode]
  );
  return (
    <select onChange={handleCurrencyChange} value={currencyCode}>
      {Object.keys(currencies).map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelect;
