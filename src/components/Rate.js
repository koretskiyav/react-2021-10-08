import React from "react";
import { ReactComponent as StarEmpty } from '../icons/star_empty.svg';
import { ReactComponent as StarFull } from '../icons/star_full.svg'
import { ReactComponent as StarHalf } from '../icons/star_half.svg';

function Rate({ value }) {
  const raiting = [1, 2, 3, 4, 5];

  return (
    <div className="rate">
      {raiting.map((item) => item <= value ? <StarFull /> : <StarEmpty />)}
    </div>
  )
}

export default Rate;