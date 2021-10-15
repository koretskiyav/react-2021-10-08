import { useMemo } from 'react';
import Menu from '../menu';
import { Reviews } from '../reviews';
import { RateWithLabel } from '../rate';
import { IMenu, IReviews } from '../../types/restaurant';

export interface IProps {
  menu: IMenu[];
  reviews: IReviews[];
}

export const Restaurant = ({ menu, reviews }: IProps) => {
  const avgRate = useMemo(
    () => Math.round(reviews.reduce((acc, item) => acc + item.rating, 0) / reviews.length),
    [reviews]
  );

  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />

      <hr />

      <RateWithLabel
        label={<h3>AVG RATE</h3>}
        rate={avgRate}
      />
    </div>
  );
};
