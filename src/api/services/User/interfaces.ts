import { ActionError, ActionSuccess } from "../../../types/global";
import { User } from "./store";

export interface IUserStore {
  user: User | null;
  getOwnUser(): Promise<ActionSuccess<User> | ActionError>;
}

export type UserStoreFactory = () => IUserStore;
