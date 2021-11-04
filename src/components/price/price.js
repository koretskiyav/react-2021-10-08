import { CurrencyConsumer } from '../../contexts/currency-context';

export default function Price({ value }) {
  return (
    <CurrencyConsumer>
      {({ converter }) => `${converter.price(value)} ${converter.symbol}`}
    </CurrencyConsumer>
  );
}
