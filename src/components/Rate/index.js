import { ReactComponent as Star } from '../../icons/raiting.svg';
import style from './rating.module.css';

export default function Rate({ value }) {
  return (
    <div className={style.star_container}>
      {Array.from({ length: value }, (val, n) => (
        <Star key={n} className={style.rate_icon} />
      ))}
    </div>
  );
}
