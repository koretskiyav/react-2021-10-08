import { createContext } from 'react';

export const userContext = createContext('Default user');

export const UserProvider = userContext.Provider;
export const UserConsumer = userContext.Consumer;

export const printUser = () => (
  <UserConsumer>{({ name }) => name}</UserConsumer>
);
