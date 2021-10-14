import { useState, useMemo } from 'react';
import Tabs from './tabs';
import { Restaurant } from './restaurant';
import { IRestaurant } from '../types';

interface IProps {
  restaurants: IRestaurant[]
}

type IRestaurantProps = Pick<IRestaurant, 'menu' | 'reviews'>;

export default function Restaurants({ restaurants }: IProps) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find(item => item.id === activeId) as IRestaurantProps,
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <Restaurant {...activeRestaurant} />
    </div>
  );
}
