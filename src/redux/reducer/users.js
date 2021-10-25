import { normalizedUsers } from '../../fixtures';
import { SUBMIT_FORM } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, user } = action;

  switch (type) {
    case SUBMIT_FORM:
      return {
        ...users,
        [user.id]: user,
      };
    default:
      return users;
  }
};
