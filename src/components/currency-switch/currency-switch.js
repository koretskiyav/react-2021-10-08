import { useContext } from 'react';
import { currencyContext } from '../../contexts/currency-context';

export default function CurrencySwitch() {
  const { converter, update } = useContext(currencyContext);
  const handleSelect = (e) => update(e.target.value);
  const handleClick = (e) => e.stopPropagation();

  return (
    <select
      onChange={handleSelect}
      onClick={handleClick}
      value={converter.code}
    >
      {Object.keys(converter.CODES).map((codeKey) => (
        <option key={codeKey} value={codeKey}>
          {codeKey}
        </option>
      ))}
    </select>
  );
}
