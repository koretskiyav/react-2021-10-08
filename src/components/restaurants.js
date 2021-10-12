import Menu from './menu';

export default function Restaurants({ restaurants }) {
  return (
    <div>
      <Menu menu={restaurants[0].menu} />
    </div>
  );
}
