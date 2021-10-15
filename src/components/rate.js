import React from 'react';
import { useState } from 'react';
import { ReactComponent as Star } from '../icons/star.svg';
import Product from './product';
import Reviews from './reviews';
import styles from './rate.module.css';

// export type Props = {
//   full: boolean,
// };

export default function Rate({ rates }) {
  const stars = Array(
    rates.rating < 6 || rates.rating > 0 ? rates.rating : 0
  ).fill(0);
  return (
    <div>
      {/* <p>{rates.user}</p>
      <p>{rates.text}</p> */}
      <p>
        {stars.map((__, index) => {
          return <Star className={styles.rates} key={index} />;
        })}
      </p>
    </div>
  );
}
// export const Rate = ({ full, starValue, rates }: Props) => {
//     //   const stars = Array(starValue).fill(0);
//     return (
//       <div>
//         <p>{rates.user}</p>
//         <p>{rates.text}</p>
//         <p>{rates.rating}</p>
//       </div>
//     );
//   };

/*  <div>
      {stars.map((_, index) => {
        return <Star key={index} />;
      })}
      {/* <Star full={true} />
      <Star full={false} />
      <Star />
      <Star />
      <Star /> }
    </div> */
