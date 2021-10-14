import { useState, useMemo } from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';
import Tabs from './tabs';

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);
  //const [rateRest, setRateRest] = useState(restaurants[0].reviews.rating);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} />
    </div>
  );
}
