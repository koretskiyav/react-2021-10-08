import { CREATEREVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';
export default (store) => (next) => (action) => {
  const { type, review } = action;
  switch (type) {
    case CREATEREVIEW:
      console.log('in mw');
      action = {
        ...action,
        name: review.name,
        restid: review.restid,
        review: {
          id: uuidv4(),
          userId: uuidv4(),
          text: review.text,
          rating: review.rating,
        },
      };
      console.log(action);
    default:
      break;
  }
  next(action);
};

// export default function (state = {}, action) {

//   }
// }
