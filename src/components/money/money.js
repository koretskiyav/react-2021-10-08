import {
  CurrencyConsumer,
  getMoneyInCurr,
  currDictionary,
} from '../../contexts/currency-context';

export default function Money({ value }) {
  return (
    <CurrencyConsumer>
      {({ current }) => getMoneyInCurr(value, current, currDictionary)}
    </CurrencyConsumer>
  );
}
