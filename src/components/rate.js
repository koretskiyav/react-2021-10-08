import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ amount }) {
  return (
    <>
      {[...Array(amount)].map((star, i) => (
        <Star key={i} />
      ))}
    </>
  );
}
