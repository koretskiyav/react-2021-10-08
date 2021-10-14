import React from 'react';
import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div className={styles.reviews}>
      {reviews.map((rates) => (
        <Rate key={rates.id} rates={rates} />
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
