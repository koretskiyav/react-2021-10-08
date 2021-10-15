import React from "react";
import { ReactComponent as StarEmpty } from '../icons/star_empty.svg';
import { ReactComponent as StarFull } from '../icons/star_full.svg';
import { ReactComponent as StarHalf } from '../icons/star_half.svg'
import styles from './rate.module.css';

function Rate({ value }) {

  const maxStarValue = 5;
  const valueDown = Math.floor(value);
  const valueUp = Math.ceil(value);

  return (
    <div className={styles.rate}>
      {[...Array(valueDown)].map((item, index) => <StarFull key={index} />)}
      {value % 1 !== 0 && <StarHalf />}
      {[...Array(maxStarValue - valueUp)].map((item, index) => <StarEmpty key={index} />)}
    </div>
  )
}

export default Rate;