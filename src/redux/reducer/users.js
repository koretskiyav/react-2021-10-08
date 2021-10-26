import { normalizedUsers } from '../../fixtures';
import { SUBMIT } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, values } = action;

  switch (type) {
    case SUBMIT:
      const { name, userId } = values;
      return {
        ...users,
        [userId]: { id: userId, name },
      };
    default:
      return users;
  }
};
