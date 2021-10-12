import useAmount from '../hooks/use-amount';

export default function Product({ product }) {
  const { amount, decrement, increment } = useAmount(0);

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price} $</p>
      <button onClick={decrement}>-</button>
      {amount}
      <button onClick={increment}>+</button>
    </div>
  );
}
