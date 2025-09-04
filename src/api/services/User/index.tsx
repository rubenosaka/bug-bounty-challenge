import React, { createContext, useContext } from "react";

import Store from "./store";
import { IUserStore } from "./interfaces";

const UserStoreContext = createContext<IUserStore | null>(null);

export const StoreProvider: React.FC = (props) => {
  const { children } = props;

  return (
    <UserStoreContext.Provider value={new Store()}>
      {children}
    </UserStoreContext.Provider>
  );
};

export const useUserStore = (): IUserStore => {
  const store = useContext(UserStoreContext);
  if (!store) {
    throw new Error('useUserStore must be used within a StoreProvider');
  }
  return store;
};
