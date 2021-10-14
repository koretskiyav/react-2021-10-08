import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate(props) {
  const result = [];
  if (props < 0) {
    return <div>Not rated</div>;
  }
  for (let i = 0; i < props.value && i < 5; i++) {
    result[i] = i;
  }
  return result.map((el) => <Star key={el} />);
}
