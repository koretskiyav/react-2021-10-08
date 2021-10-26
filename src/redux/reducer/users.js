import { normalizedUsers } from '../../fixtures';
import { SUBMIT_FEEDBACK } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, users) => ({ ...acc, [users.id]: users }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    case SUBMIT_FEEDBACK: {
      return {
        ...users,
        [action.userId]: { id: action.userId, name: action.name },
      };
    }
    default:
      return users;
  }
};
