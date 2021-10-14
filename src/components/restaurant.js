import Reviews from './reviews';
import Menu from './menu';
import { restaurants } from '../fixtures';
import Rate from './rate';

export default function Restaurant(props) {
  const filtredResult = restaurants.filter((elem) => elem.id === props.id);
  const rvs = filtredResult[0].reviews;
  let sum = 0;
  for (let element of rvs) {
    sum += element.rating;
  }
  const result = sum / rvs.length;
  return (
    <div>
      <Reviews restId={props.id} />
      avg score:
      <Rate value={result} />
      <Menu menu={props.menu} />
    </div>
  );
}
