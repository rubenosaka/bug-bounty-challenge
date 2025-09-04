import { makeAutoObservable, runInAction } from "mobx";
import {
  ActionError,
  ActionResultStatus,
  ActionSuccess,
} from "../../../types/global";
import { resultOrError, ResultOrErrorResponse } from "../../../utils/global";
import { IUserStore } from "./interfaces";

export interface User {
  firstName?: string;
  lastName?: string;
  eMail?: string;
}

export default class UserStore implements IUserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async getOwnUser() {
    const MOCK_API_DELAY = 500;
    const MOCK_USER_DATA = {
      firstName: "Aria",
      lastName: "Test",
      eMail: "linda.bolt@osapiens.com",
    };

    const [result, error] = (await resultOrError(
      new Promise((resolve) =>
        setTimeout(() => resolve(MOCK_USER_DATA), MOCK_API_DELAY)
      )
    )) as ResultOrErrorResponse<User>;

    if (!!error) {
      return {
        status: ActionResultStatus.ERROR,
        error,
      } as ActionError;
    }

    if (result) {
      runInAction(() => {
        this.user = result;
      });

      return {
        status: ActionResultStatus.SUCCESS,
        result: result,
      } as ActionSuccess<User>;
    }

    return {
      status: ActionResultStatus.ERROR,
      error: "Something went wrong.",
    } as ActionError;
  }
}
