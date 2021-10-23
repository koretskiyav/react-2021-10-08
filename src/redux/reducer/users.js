import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, users) => ({ ...acc, [users.id]: users }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, user } = action;

  switch (type) {
    case ADD_REVIEW: {
      return { ...users, [user.id]: user };
    }
    default:
      return users;
  }
};
