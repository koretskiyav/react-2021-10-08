import { v4 as uuid4 } from 'uuid';

export default (store) => (next) => (action) => {
  console.log(uuid4());
  next(action);
};
