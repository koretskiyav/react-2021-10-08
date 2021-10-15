import React from 'react';
import Rate from './rate';
import styles from './reviews.module.css';
import stylesRate from './rate.module.css';
import { useState } from 'react';

export default function Reviews({ reviews }) {
  const countStar = reviews.reduce((sum, current) => sum + current.rating, 0);
  return (
    <div className={styles.reviews}>
      <h1>Reviews</h1>
      <p className={stylesRate.ratemain}>
        Raiting: <span className={stylesRate.rateall}>{countStar}</span>
      </p>
      {reviews.map((rates) => (
        <div className={stylesRate.rate}>
          <p>{rates.user}</p>
          <p>{rates.text}</p>
          <Rate key={rates.id} rates={rates} />
        </div>
      ))}
    </div>
  );
}
// export default function Reviews({ rates }) {
//   return (
//     <div>
//       <p>{rates.user}</p>
//       <p>{rates.text}</p>
//       <p>{rates.rating}</p>
//     </div>
//   );
// }
