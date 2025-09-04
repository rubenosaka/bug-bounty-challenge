import { StoreProvider as UserProvider } from "./User";

const getAllServices = (): React.FC<any>[] => {
  return [UserProvider];
};

export default getAllServices();
