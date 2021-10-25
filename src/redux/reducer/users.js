import { normalizedUsers } from '../../fixtures';
import { CREATEREVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, users) => ({ ...acc, [users.id]: users }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, review, name } = action;
  switch (type) {
    case CREATEREVIEW:
      console.log('users');
      return {
        ...users,
        [review.userId]: { id: review.userId, name: name },
      };
  }
  switch (type) {
    default:
      return users;
  }
};
