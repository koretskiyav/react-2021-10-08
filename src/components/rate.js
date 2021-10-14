import { useMemo } from 'react';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ rate }) {
  const rating = useMemo(() => {
    const intRate = Math.round(rate);
    const stars = [];
    for (let i = 0; i < intRate; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  }, [rate]);

  return <div>{rating}</div>;
}
