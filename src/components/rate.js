import { ReactComponent as Star } from '../icons/star.svg';

function Rate({ value }) {
  return (
    <div>
      {[...Array(value)].map((_, i) => <Star key={i} />)}
    </div>
  );
}

export default Rate
