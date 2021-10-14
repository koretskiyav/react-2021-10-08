import Reviews from './reviews';
import Menu from './menu';

export default function Restaurant(props) {
  return (
    <div>
      <Reviews restId={props.id} />
      <Menu menu={props.menu} />
    </div>
  );
}
