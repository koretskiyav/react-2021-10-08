import { normalizedUsers } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, review } = action;

  switch (type) {
    case ADDREVIEW:
      const { userId, name } = review;
      return { ...users, [userId]: { userId, name } };

    default:
      return users;
  }
};
